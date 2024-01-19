import './App.css';
import { useReducer } from 'react';
import React from 'react';


const ACTION = {
    INCRIMENT: "incriment",

    DECRIMENT: "decriment"
}

function reducer(state, action) {
    switch (action.type) {
        case 'incriment':
            return { count: state.count + 1 };
        case 'decriment':
            return { count: state.count - 1 };
        default:
            return state;
    }
}



function App() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });




    return ( <
        div className = "app" >
        <
        h2   style = {
            { fontSize:"40px" }
        }> This is counter app < /h2> <
        p > click the pluse button to add and the minus button to substruct < /p>

        <
        div className = 'mainpart' >
        <
        p className='resultp'> count: { state.count } < /p>
        <div className='butons'>
        <
        button className = "addbutton"
        style = {
            { marginRight: "20px" }
        }
        onClick = {
            () => {
                dispatch({ type: ACTION.INCRIMENT })
            }
        } > + < /button> 

        <
        button className = "substractbutton"
        onClick = {
            () => {
                dispatch({ type: ACTION.DECRIMENT })
            }
        } > - < /button>
        </div>

        <
        /div>

        <
        /div >

    );
}


export default App;