
const path = require('path');
const out = require('wow-cmd').output;
const cmdPath = process.cwd();
const Client = require('ftp');

const Handle = (options, data, next) => {
    let {
        params,
    } = options;
    params = params ? params.toLocaleLowerCase() : '';
    try {
        if (!params)
            throw '未指定配置文件参数';
        if (!data)
            throw '未指定上传文件';
        let config = require(path.join(cmdPath, params)).default;
        const client = new Client();
        client.connect(config);
        try {
            client.on('ready', () => {
                let loop;
                (loop = (data, index) => {
                    let { input, output } = data[index] || {};
                    if (!input || !output) {
                        client.end();
                        out.success('ftp.cmd=>', `全部上传完毕`);
                        return null;
                    }
                    output = `${config.rootDir}${output}`;
                    let path = output.substr(0, output.lastIndexOf('/'));
                    client.get(path, (err) => {
                        if (err) {
                            client.mkdir(path, true, (err) => {
                                if (err) {
                                    out.error('ftp.cmd=>', `创建文件夹：${path} 失败：`, err);
                                    throw err;
                                }
                                client.put(input, output, (err) => {
                                    if (err) {
                                        out.error('ftp.cmd=>', `上传文件：${input} 失败：`, err);
                                    } else {
                                        out.success('ftp.cmd=>', `上传文件：${input} 成功`);
                                    }
                                    index++;
                                    loop(data, index)
                                });
                            });
                        } else {
                            client.put(input, output, (err) => {
                                if (err) {
                                    out.error('ftp.cmd=>', `上传文件：${input} 失败：`, err);
                                } else {
                                    out.success('ftp.cmd=>', `上传文件：${input} 成功`);
                                }
                                index++;
                                loop(data, index)
                            });
                        }
                    })
                }) (data, 0)
            });
            client.on('error', (err) => {
                out.error('ftp.cmd=>', `上传错误：${err}`);
                client.end();
            });
            client.on('close', (err) => {
                out.info('ftp.cmd=>', `上传关闭：${err}`);
                client.end();
            })
        } catch (e) {
            client.end();
            throw e
        }
    } catch (e) {
        out.error('ftp.cmd=>', `上传错误：${e}`);
    } finally {
        next();
    }
};

// 参数 options
Handle.options = {
    cmd: ['-f', '--ftp'],
};

module.exports = Handle;
