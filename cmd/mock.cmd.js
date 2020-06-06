
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
        console.log('entryDir => ', entryDir);
        console.log('outputDir => ', outputDir);
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
