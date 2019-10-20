const defaultState = {
    inputValue : 'Write Something',
    list: [
        '早上7点起床，去上班',
        '中午午睡一小时'
    ]
}  //默认数据
export default (state = defaultState, action)=>{  //就是一个方法函数
    // console.log(state, action)
    if (action.type === 'change_input_value') {
        let newState = JSON.parse(JSON.stringify(state))  //深度拷贝state
        newState.inputValue = action.value;
        // console.log(newState)
        return newState;
    }
    if (action.type === 'addItem') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        // console.log(newState)
        return newState;
    }
    if (action.type === 'deleteItem') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);   //删除数组中对应的值
        return newState;
    }
    return state;
}