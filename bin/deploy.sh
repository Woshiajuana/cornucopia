#!/bin/sh

# ---------------------------------------------------------------------------
# modify these config for the target project
ServerAddress=root@119.3.156.101
DeployDirectoryPath=/web/blog
# ---------------------------------------------------------------------------

# ---------------------------------------------------------------------------
npm run build
cd ./packages/horn-site/dist
zip -r ./dist.zip ./*
ssh ${ServerAddress} "mkdir -p $DeployDirectoryPath"
scp -r ./dist.zip ${ServerAddress}:${DeployDirectoryPath}
rm ./dist.zip
ssh ${ServerAddress} "cd $DeployDirectoryPath && unzip -o dist.zip"
# ---------------------------------------------------------------------------
