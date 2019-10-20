import React, { Component } from 'react';
// import 'antd/dist/antd.css';
// import { Input, Button, List } from 'antd';
import TodoListUI from './TodoListUI';
import store from './store/index';
// import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './store/actionTypes';
import { changeInputAction, addItemAction, deleteItemAction, getListAction } from './store/actionCreatores';
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
            // <div>
            //     <div>
            //         <Input 
            //             placeholder={this.state.inputValue} 
            //             style={{width:'250px'}}
            //             onChange={this.changeInputValue}/>
            //         <Button 
            //             type="primary"
            //             onClick={this.clickBtn}
            //         >增加</Button>
            //     </div>
            //     <div style={{margin: '10px', width: '300px'}}>
            //         <List 
            //             bordered 
            //             dataSource={this.state.list} 
            //             renderItem={(item,index)=>(<List.Item onClick={()=>this.deleteItem(index)}>{item}</List.Item>)}>
            //         </List>
            //     </div>
            // </div>
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                deleteItem={this.deleteItem}/>
        );
    }
    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5dac11aa535c0573eacc1d56/redux').then((res)=>{
            // console.log(res)
            const data = res && res.data || {};
            const action = getListAction(data);
            store.dispatch(action);
        })
    }
    changeInputValue(e) {
        // const action = {
        //     type: CHANGE_INPUT,
        //     value: e.target.value
        // };
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