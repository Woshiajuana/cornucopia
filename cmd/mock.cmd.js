
const fs = require('fs-extra');
const path = require('path');
const output = require('wow-cmd').output;
const cmdPath = process.cwd();

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
        console.log('entryDir => ', entryDir);
        console.log('outputDir => ', outputDir);

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
                    jsonArticles.push({
                        id: `${fileDirArr.join('/')}`,
                        catalog: '',
                    })
                    // const name = Array.from(new Set([...fileDirArr])).join('_');
                    // treeJson.resource[name] = { src: `${name}.js` };
                    // oldTreeJson.resource[name] = `${name}.js`;
                } else if (fileStat.isDirectory() && [].indexOf(fileLastDir) === -1) {
                    walk(fullPath);
                }
            });
        })(entryDir);

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
