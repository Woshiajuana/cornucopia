# bin/bash

# 打包
npm run build

# 压缩
cd ./dist
zip -r ./dist.zip ./*

pwd

# 上传
scp -r ./dist.zip root@119.3.156.101:/web/blog/

# 解压
ssh root@119.3.156.101 'cd /web/blog/ && unzip -o dist.zip'


