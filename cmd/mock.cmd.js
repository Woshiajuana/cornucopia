
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
    try {
        if (!params)
            throw '未指定设置发布参数';
        output.success('mock.cmd=>', `指定生成mock数据【${params}】`);
        let [ entryDir, outputDir ] = params.split('::');
        entryDir = path.join(cmdPath, entryDir);
        outputDir = path.join(cmdPath, outputDir);
        output.success('mock.cmd=>', `指定生成mock数据入口目录【${entryDir}】`);
        output.success('mock.cmd=>', `指定生成mock数据出口目录【${outputDir}】`);

        // 遍历
        const jsonCatalog = [];
        const jsonArticles = [];
        ;(function walk(directory) {
            fs.readdirSync(directory).forEach((file) => {
                const fullPath = path.join(directory, file);
                const fileStat = fs.statSync(fullPath);
                const fileExtName = path.extname(fullPath);
                const fileDirArr = fullPath.replace(entryDir, '').replace(/\\/g, '/').split('\/');
                const fileLastDir = fileDirArr[fileDirArr.length - 1];
                if (fileStat.isFile() && ['.md'].indexOf(fileExtName) > -1) {
                    fileDirArr.shift();
                    let catalog = fileDirArr[0];

                    const content = fs.readFileSync(fullPath).toString();
                    const $ = cheerio.load(marked(content));

                    console.log('标题 =>', $('h1').text())

                    jsonArticles.push({
                        id: `${fileDirArr.join('/')}`,
                        time: `${fileDirArr[1].replace('.md', '')}`,
                        catalog,
                    });

                    let [ objCatalog ] = jsonCatalog.filter((item) => item.title === catalog);
                    if (objCatalog) {
                        objCatalog.number++;
                    } else {
                        jsonCatalog.push({ title: catalog, number: 1 });
                    }
                } else if (fileStat.isDirectory() && [].indexOf(fileLastDir) === -1) {
                    walk(fullPath);
                }
            });
        })(entryDir);

        // 排序
        jsonArticles.sort((x, y) => y.time - x.time);

        // 生产 json
        fs.ensureDirSync(outputDir);
        fs.writeFileSync(path.join(outputDir, 'articles.json'), JSON.stringify(jsonArticles, null, 4));
        fs.writeFileSync(path.join(outputDir, 'catalog.json'), JSON.stringify(jsonCatalog, null, 4));

    } catch (e) {
        output.error('mock.cmd=>', `发布app错误：${e}`);
    } finally {
        next();
    }
};

// 参数 options
Handle.options = {
    cmd: ['-m', '--mock'],
};

module.exports = Handle;
