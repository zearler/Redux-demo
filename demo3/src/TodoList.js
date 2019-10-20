import React, { Component } from 'react';
// import 'antd/dist/antd.css';
// import { Input, Button, List } from 'antd';
import TodoListUI from './TodoListUI';
import store from './store/index';
// import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './store/actionTypes';
import { changeInputAction, addItemAction, deleteItemAction, getListAction, getToDoList } from './store/actionCreatores';
import axios from 'axios';

class TodoList extends Component {
    constructor(props){
        super(props);
         //关键代码-----------start
        this.state = store.getState();
        //关键代码-----------end
        this.changeInputValue = this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.clickBtn = this.clickBtn.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        store.subscribe(this.storeChange);  //订阅Redux的状态
        // console.log(store.getState());
    }
    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                deleteItem={this.deleteItem}/>
        );
    }
    componentDidMount(){
        const action = getToDoList();
        store.dispatch(action);
    }
    changeInputValue(e) {
        const action = changeInputAction(e.target.value);
        store.dispatch(action);
    }

    //input-改变值
    storeChange() {
        this.setState(store.getState());
    }

    clickBtn() {
        if (!this.state.inputValue) {
            return;
        }
        // const action = {
        //     type: ADD_ITEM
        // };
        const action = addItemAction();
        store.dispatch(action)
    }
    deleteItem(index) {
        // const action = {
        //     type: DELETE_ITEM,
        //     index
        // };
        const action = deleteItemAction(index);
        store.dispatch(action);
    }
}

export default TodoList;