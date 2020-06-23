
const fs = require('fs-extra');
const path = require('path');
const output = require('wow-cmd').output;
const cmdPath = process.cwd();
const marked = require('marked');
const cheerio = require('cheerio');

const Handle = (options, data, next) => {
    let {
        params,
    } = options;
    params = params ? params.toLocaleLowerCase() : '';
    let arrFileData = [];
    try {
        if (!params)
            throw '未指定设置mock参数';
        let { inputDir: entryDir, outputDir } = require(path.join(cmdPath, params)).default;
        entryDir = path.join(cmdPath, entryDir);
        outputDir = path.join(cmdPath, outputDir);
        output.success('mock.cmd=>', `指定生成mock数据入口目录【${entryDir}】`);
        output.success('mock.cmd=>', `指定生成mock数据出口目录【${outputDir}】`);

        // 遍历
        const jsonClassify = [];
        const jsonArticles = [];
        ;(function walk(directory) {
            fs.readdirSync(directory).forEach((file) => {
                const fullPath = path.join(directory, file);
                const fileStat = fs.statSync(fullPath);
                const fileExtName = path.extname(fullPath);
                const fileRelativePath = fullPath.replace(entryDir, '').replace(/\\/g, '/');
                const fileDirArr = fileRelativePath.split('\/');
                const fileLastDir = fileDirArr[fileDirArr.length - 1];
                if (fileStat.isFile() && ['.md'].indexOf(fileExtName) > -1) {
                    fileDirArr.shift();
                    let classify = fileDirArr[0];
                    const content = fs.readFileSync(fullPath).toString();
                    const $ = cheerio.load(marked(content));
                    let time = fileDirArr[1].replace('.md', '');
                    jsonArticles.push({
                        id: `${fileDirArr.join('/')}`,
                        title: $('h1').text() || '',
                        group: `${time.substring(0, 4)}-${time.substring(4, 6)}`,
                        date: `${time.substring(0,4)}-${time.substring(4,6)}-${time.substring(6,8)} ${time.substring(8,10)}:${time.substring(10,12)}:${time.substring(12)}`,
                        abstract: $('p').text().substring(0, 100) || '',
                        time,
                        classify,
                        path: fileRelativePath,
                    });
                    arrFileData.push({
                        input: fullPath,
                        output: `articles${fileRelativePath}`,
                    });
                    let [ objClassify ] = jsonClassify.filter((item) => item.title === classify);
                    if (objClassify) {
                        objClassify.number++;
                    } else {
                        jsonClassify.push({ title: classify, number: 1 });
                    }
                } else if (fileStat.isDirectory() && [].indexOf(fileLastDir) === -1) {
                    walk(fullPath);
                }
            });
        })(entryDir);

        // 排序
        jsonArticles.sort((x, y) => y.time - x.time);


        arrFileData.push(
            {
                input: path.join(outputDir, 'articles.json'),
                output: `mocks/articles.json`,
            },
            {
                input: path.join(outputDir, 'classify.json'),
                output: `mocks/classify.json`,
            },
        );

        // 生产 json
        fs.ensureDirSync(outputDir);
        fs.writeFileSync(path.join(outputDir, 'articles.json'), JSON.stringify(jsonArticles, null, 4));
        fs.writeFileSync(path.join(outputDir, 'classify.json'), JSON.stringify(jsonClassify, null, 4));

    } catch (e) {
        output.error('mock.cmd=>', `发布app错误：${e}`);
    } finally {
        next(arrFileData);
    }
};

// 参数 options
Handle.options = {
    cmd: ['-m', '--mock'],
};

module.exports = Handle;
