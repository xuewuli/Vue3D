# vue3d

> A Vue.js project

## Build Setup

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build

# build for production and view the bundle analyzer report
yarn build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 其它说明

    在线demo https://xuewuli.github.io/Vue3D/

#### 使用 three.js 渲染引擎结合Vue.js开发

- three.js 可以实现绝大部分3D效果的表现，又足够轻量方便在各种h5框架下集成
- Vue.js选择的理由是主体仍面向h5开发，避免过度依赖“游戏”相关技术


    /src/component/model3d 实现了一个基本的模型加载显示组件，用的gltf加载器，更多功能可继续扩展

#### 相关链接
threejs官网
https://threejs.org/

vuejs官网
https://vuejs.org/