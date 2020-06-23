
const fs = require('fs-extra');
const path = require('path');
const out = require('wow-cmd').output;
const cmdPath = process.cwd();
const Client = require('ftp');
const co = require('co');
const prompt = require('co-prompt');

const Handle = (options, data, next) => {
    let {
        params,
    } = options;
    params = params ? params.toLocaleLowerCase() : '';
    try {
        let config = {
            host: '49.233.210.236',
            port: '21',
            user: 'ftp',
        };
        if (params) {
            config = Object.assign(config, require(path.join(cmdPath, params)).default);
        }
        let { rootDir, password, entryDir } = config;
        if (entryDir) {
            entryDir = path.join(cmdPath, entryDir);
            data = [];
            ;(function walk(directory) {
                fs.readdirSync(directory).forEach((file) => {
                    const fullPath = path.join(directory, file);
                    const fileStat = fs.statSync(fullPath);
                    const fileRelativePath = fullPath.replace(entryDir, '').replace(/\\/g, '/');
                    const fileDirArr = fileRelativePath.split('\/');
                    const fileLastDir = fileDirArr[fileDirArr.length - 1];
                    if (fileStat.isFile()) {
                        fileDirArr.shift();
                        data.push({
                            input: fullPath,
                            output: `${fileRelativePath.substring(1)}`,
                        });
                    } else if (fileStat.isDirectory() && [].indexOf(fileLastDir) === -1) {
                        walk(fullPath);
                    }
                });
            })(entryDir);
        }
        if (!data)
            throw '未指定上传文件';
        let fire = function * () {
            if (!rootDir) {
                rootDir = yield prompt('\n请输入上传根目录(不要斜杆开头结尾): ');
            }
            if ([ 'jianyi', 'ajuan', 'tiaotiao'].indexOf(rootDir) === -1) {
                out.error('ftp.cmd=>', `上传根目录错误`);
                return process.exit(0);
            }
            if (!password) {
                password = yield prompt('\n请输入FTP密码: ');
            }
            const client = new Client();
            client.connect({
                ...config,
                password,
                rootDir,
            });
            try {
                client.on('ready', () => {
                    let loop;
                    (loop = (data, index) => {
                        let { input, output } = data[index] || {};
                        if (!input || !output) {
                            client.end();
                            out.success('ftp.cmd=>', `全部上传完毕`);
                            process.exit(0);
                            return null;
                        }
                        output = `blog/${config.rootDir}/${output}`;
                        let path = output.substr(0, output.lastIndexOf('/'));
                        client.get(path, (err) => {
                            if (err) {
                                client.mkdir(path, true, (err) => {
                                    if (err) {
                                        out.error('ftp.cmd=>', `创建文件夹：${path} 失败：`, err);
                                        return null;
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
                    process.exit(0);
                });
                client.on('close', (err) => {
                    out.info('ftp.cmd=>', `上传关闭：${err}`);
                    client.end();
                })
            } catch (e) {
                client.end();
                process.exit(0);
            }
        };
        co(fire());
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
