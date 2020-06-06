
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
        output.success('release.cmd=>', `指定发布参数【${params}】`);

        const {
            app,
            env,
        } = params = ((params) => {
            let objParams = {};
            params.split('::').forEach((param) => {
                let [key, value] = param.split('=');
                if (key, value)
                    objParams[key] = value;
            });
            return objParams;
        })(params);
        if (!app)
            throw '未指定发布app';
        output.success('release.cmd=>', `指定发布app【${app}】`);
        if (!env)
            throw '未指定发布env';
        output.success('release.cmd=>', `指定发布env【${env}】`);

        const {
            applicationConfig,
            directoryConfig,
            ip,
            port,
        } = require('./config');
        const application = applicationConfig[app];
        if (!application)
            throw `applicationConfig无【${app}】应用配置`;
        const {
            release,
            tree,
        } = application;
        delete application.release;
        delete application.tree;
        const releaseEnvs = release[env];
        if (!releaseEnvs)
            throw `【${app}】应用配置无【${env}】环境配置`;

        ;((releaseEnvs) => {
            for (let key in releaseEnvs) {
                const relEnv = releaseEnvs[key];
                if (typeof relEnv === 'object') {
                    delete releaseEnvs[key];
                    let {
                        path,
                        filename,
                        config,
                        prompt,
                    } = relEnv;
                    if (path && filename && config) {
                        if (typeof config !== 'string')
                            config = JSON.stringify(config, null, 4);
                        fs.ensureDirSync(path);
                        fs.writeFileSync(`${path}/${filename}`, `export default ${config}`);
                        output.success('release.cmd=>', `${prompt || key}配置【${config}】`);
                    }
                }
            }
        })(releaseEnvs);

        if (!tree)
            throw '未指定发布tree';
        const {
            includeExtName,
            excludeDirectory,
            rootDirectoryPath,
            rootOutputPath,
        } = directoryConfig;
        let treeJson = {
            version: '0.0.1',
            ...application,
            ...releaseEnvs,
            ...params,
            resource: {},
        };
        let oldTreeJson = {
            version: '0.0.1',
            ...application,
            ...releaseEnvs,
            ...params,
            resource: {},
        };
        if (!treeJson.base) {
            treeJson.base = oldTreeJson.base = `http://${ip}:${port}${rootOutputPath}/${app}/${env}/${treeJson.version}`;
        }
        treeJson.base = oldTreeJson.base = treeJson.base.replace('[version]', treeJson.version);
        output.info('release.cmd=>', `配置 tree.json app名称【app: ${treeJson.name}】`);
        output.info('release.cmd=>', `配置 tree.json 版本【version: ${treeJson.version}】`);
        output.info('release.cmd=>', `配置 tree.json 入口文件【entry: ${treeJson.entry}】`);
        output.info('release.cmd=>', `配置 tree.json 基础路径【base: ${treeJson.base}】`);
        const rootDirectoryAbsolutePath = path.join(cmdPath, rootDirectoryPath);
        ;(function walk(directory) {
            fs.readdirSync(directory).forEach((file) => {
                const fullPath = path.join(directory, file);
                const fileStat = fs.statSync(fullPath);
                const fileExtName = path.extname(fullPath);
                const fileDirArr = (path.join(directory, path.basename(fullPath, fileExtName))).replace(rootDirectoryAbsolutePath, '').replace(/\\/g, '/').split('\/');
                const fileLastDir = fileDirArr[fileDirArr.length - 1];
                if (fileStat.isFile() && includeExtName.indexOf(fileExtName) > -1) {
                    fileDirArr.shift();
                    const name = Array.from(new Set([...fileDirArr])).join('_');
                    treeJson.resource[name] = { src: `${name}.js` };
                    oldTreeJson.resource[name] = `${name}.js`;
                } else if (fileStat.isDirectory() && excludeDirectory.indexOf(fileLastDir) === -1) {
                    walk(fullPath);
                }
            });
        })(rootDirectoryAbsolutePath);

        ;((tree) => {
            tree.forEach((item) => {
                let {
                    mode,
                    path,
                    filename,
                } = item;
                path = path.replace('[app]', app).replace('[env]', env).replace('[version]', treeJson.version);
                fs.ensureDirSync(path);
                fs.writeFileSync(`${path}/${filename}`, JSON.stringify(mode === 'new' ? treeJson : oldTreeJson, null, 4));
            });
        })(tree);
        fs.writeFileSync(path.join(cmdPath, '/cmd/cmdParams.json'), JSON.stringify({
            app,
            env,
            name: treeJson.name,
            version: treeJson.version,
        }, null, 4));
        output.success('release.cmd=>', `配置 生成 tree.json 成功`);
    } catch (e) {
        output.error('release.cmd=>', `发布app错误：${e}`);
        fs.writeFileSync(path.join(cmdPath, '/cmd/cmdParams.json'), JSON.stringify({ err: true }, null, 4));
    } finally {
        next();
    }
};

// 参数 options
Handle.options = {
    cmd: ['-r', '--release'],
};

module.exports = Handle;
