import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST} from './actionTypes';
import axios from 'axios';
export const changeInputAction = value => ({
    type: CHANGE_INPUT,
    value
});
export const addItemAction = ()=>({
    type:ADD_ITEM
});
export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
});

export const getListAction = data => ({
    type: GET_LIST,
    data
})

export const getToDoList = ()=>{
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5dac11aa535c0573eacc1d56/redux').then((res)=>{
            const data = res && res.data || {};
            console.log(data)
            const action = getListAction(data);
            dispatch(action);
        })
    }
}