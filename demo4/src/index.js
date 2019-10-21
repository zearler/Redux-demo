import React from 'react';
import ReactDom from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store';

const App = (
    <Provider store={store}>
        <TodoList/>
    </Provider>
)

ReactDom.render(App, document.getElementById('root'));