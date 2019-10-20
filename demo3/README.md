This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### 安装 Redux-thunk 组件

    ``` bash
        npm install --save redux-thunk
    ```
### 配置 Redux-thunk 组件
    如果你按照官方文档来写，你直接把thunk放到createStore里的第二个参数就可以了，但以前我们配置了Redux Dev Tools，已经占用了第二个参数。
    官方文档给的方法:
    ``` bash
        const store = createStore(
        reducer,
        applyMiddleware(thunk)
    ) // 创建数据存储仓库
    ```
    这样写是完全没有问题的，但是我们的Redux Dev Tools插件就不能使用了，如果想两个同时使用，需要使用增强函数。使用增加函数前需要先引入compose,然后利用compose创造一个增强函数，就相当于建立了一个链式函数;

    ``` bash
        import { createStore , applyMiddleware, compose } from 'redux'
        import thunk from 'redux-thunk'
        const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
        const enhancer = composeEnhancers(applyMiddleware(thunk))
        const store = createStore( reducer, enhancer)
    ```

