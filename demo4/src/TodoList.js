import React from 'react'
import { connect } from 'react-redux';

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
};
const dispatchToProps = (dispatch) => {
    return {
        inputChange(e){
            const action = {
                type: 'change_input',
                value: e.target.value
            };
            dispatch(action)
        },
        clickButton(){
            const action = {
                type: 'add_item'
            };
            dispatch(action);
        }
    }
}

// class TodoList extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         let {inputValue, inputChange, clickButton, list} = this.props;
//         return (
//             <div>
//                 <div>
//                     <input value={inputValue} onChange={inputChange}/>
//                     <button onClick={clickButton}>提交</button>
//                 </div>
//                 <ul>
//                     {
//                         list.map((item, index) => {
//                             return (<li key={index}>{item}</li>)
//                         })
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }

const TodoList = (props) => {
    let {inputValue, inputChange, clickButton, list} = props;
    return (
        <div>
            <div>
                <input value={inputValue} onChange={inputChange}/>
                <button onClick={clickButton}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (<li key={index}>{item}</li>)
                    })
                }
            </ul>
        </div>
    );
}

export default connect(stateToProps, dispatchToProps)(TodoList);