import React, { createContext, useReducer } from 'react'; //working with global state use reducer 
import AppReducer from './AppReducer';

const initState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20},
        { id: 2, text: 'Salary', amount: 300},
        { id: 3, text: 'Book', amount: -10}
    ]
}
export const GlobalContext = createContext(initState);
export const GlobalProvider = ({children}) => { 
    const [state, dispatch] =  useReducer(AppReducer, initState);//1. GP wrapped around children  - things with -</> like<Header/> and stuff. 2AppReducer is switch case statement and initState is the array
    function deleteTransaction(id){  // app reducer is the function
        dispatch ({
            type:'Delete_Transaction',
            payload: id
        });}
        function addTransaction(transaction){
            dispatch ({
                type:'Add_Transaction',
                payload: transaction
            });
        
    }
    return(<GlobalContext.Provider value={{transactions: state.transactions,
    deleteTransaction,
    addTransaction}}> 
        {children}

    </GlobalContext.Provider>);// state.transactions is basically how we acess the transactions array

}