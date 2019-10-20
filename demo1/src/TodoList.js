import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store/index';

// const data = [
//     '早上9点30开晨会,分配今天的开发工作',
//     '早上10点开始编码',
//     '晚5点30对今日代码进行review'
// ];
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
            <div>
                <div>
                    <Input 
                        placeholder={this.state.inputValue} 
                        style={{width:'250px'}}
                        onChange={this.changeInputValue}/>
                    <Button 
                        type="primary"
                        onClick={this.clickBtn}
                    >增加</Button>
                </div>
                <div style={{margin: '10px', width: '300px'}}>
                    <List 
                        bordered 
                        dataSource={this.state.list} 
                        renderItem={(item,index)=>(<List.Item onClick={()=>this.deleteItem(index)}>{item}</List.Item>)}>
                    </List>
                </div>
            </div>
        );
    }
    changeInputValue(e) {
        // console.log(e.target.value)
        const action = {
            type: 'change_input_value',
            value: e.target.value
        };
        store.dispatch(action);
    }

    //input-改变值
    storeChange() {
        this.setState(store.getState());
    }

    clickBtn() {
        // console.log('zhanglei')
        if (!this.state.inputValue) {
            return;
        }
        const action = {
            type: 'addItem'
        };
        store.dispatch(action)
    }
    deleteItem(index) {
        // console.log(index)
        const action = {
            type: 'deleteItem',
            index
        };
        store.dispatch(action);
    }
}

export default TodoList;