
const fs = require('fs-extra');
const path = require('path');
const output = require('wow-cmd').output;
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

        data = [
            {
                input: '/Users/admin/Desktop/WorkCode/AjuanProject/static/articles/Android/20200612163200.md',
                output: '/Android/20200612163200.md',
            }
        ]
        const client = new Client();
        client.connect(config);
        try {
            client.on('ready', () => {
                data.forEach((item, index) => {
                    ((input, output) => {
                        output = `${config.rootDir}${output}`
                        console.log(input, output)
                        let path = output.substr(0, output.lastIndexOf('/'));
                        console.log('00000000000000000', path)
                        client.get(path, (err) => {
                            console.log('1111', err)
                            if (err) {
                                client.mkdir(path, true, (err) => {
                                    if (err) {
                                        console.log('1', err)
                                    } else  {
                                        client.put(input, output, (err) => {
                                            client.end();
                                            if (err) {
                                                console.log('3', err)
                                            } else {
                                                console.log("上传成功");
                                            }
                                        });
                                    }

                                });
                            } else {
                                client.put(input, output, (err) => {
                                    client.end();
                                    if (err) {
                                        console.log('2', err)
                                    } else  {
                                        console.log("上传成功");
                                    }
                                });
                            }
                        })
                    })(item.input, item.output)
                });
            });
        } catch (e) {
            client.end();
            throw e
        }

    } catch (e) {
        output.error('ftp.cmd=>', `上传错误：${e}`);
    } finally {
        next();
    }
};


function createClient(config, app) {
    return {
        put: (input, output) => new Promise((resolve, reject) => {
            const client = new Client();
            client.connect(config);
            client.on('ready', () => {
                let path = output.substr(0, output.lastIndexOf('/'));
                client.get(path, (err) => {
                    if (err) {
                        client.mkdir(path, true, (err) => {
                            err ? reject(err) : client.put(input, output, (err) => {
                                client.end();
                                err ? reject(err) : resolve();
                            });
                        });
                    } else {
                        client.put(input, output, (err) => {
                            client.end();
                            err ? reject(err) : resolve();
                        });
                    }
                })
            });
        }),
    };
}

// 参数 options
Handle.options = {
    cmd: ['-f', '--ftp'],
};

module.exports = Handle;
