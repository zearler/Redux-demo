import { createStore , applyMiddleware, compose} from 'redux';  //引入createStore方法
import reducer from './reducer';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}): compose;
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
)           //创建数据存储仓库
export default store;                 //暴露出去

