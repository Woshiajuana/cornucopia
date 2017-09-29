##构建weex项目
```
|——app/                                             //一个weex项目
|   |——dist/                                        //js打包之后的主目录
|   |   |——bd-native/                               //本地环境打包之后的目录
|   |   |——cs-native/                               //测试环境打包之后的目录
|   |   |——zsc-native/                              //准生成环境打包之后的目录
|   |   |——sc-native/                               //生成环境打包之后的目录
|   |——node_modules/                                //项目文件依赖
|   |——src/                                         //主要目录
|   |   |——assets/                                  //静态文件资源
|   |   |   |——lib/                                 //js静态文件资源
|   |   |   |   |——api.js                           //api接口请求
|   |   |   |   |——tool.js                          //工具类的文件
|   |   |   |——img/                                 //本地图片存放
|   |   |——config/                                  //配置文件目录
|   |   |   |——ENV.js                               //环境
|   |   |   |——ENV_CONFIG.js                        //环境配置文件
|   |   |——components/                              //组件总目录
|   |   |   |——view/                                //视图组件目录
|   |   |   |   |——view.vue                         //一个组件
|   |   |   |   |——children/                        //子组件目录
|   |   |   |   |   |——view-header.vue              //子组件
|   |   |——module/                                  //需要的功能模块总目录
|   |   |   |——navigator/                           //功能模块目录
|   |   |   |   |——navigator.js                     //功能模块
|   |   |——views/                                   //视图页面总目录
|   |   |   |——home/                                //首页目录
|   |   |   |   |——home.vue                         //首页
|   |   |   |   |   |——children/                    //首页用到的组件
|   |   |   |   |   |   |——home-heaer.vue           //首页子组件
|   |   |——App.vue                                  //入口文件                        
|   |——.babelrc                                     
|   |——webpack.config.js                            
|   |——webpack.dev.js                               
|   |——.editorconfig                                
|   |——.gitgnore                                    
|   |——package.json                                 
|   |——README.md                                    
```
