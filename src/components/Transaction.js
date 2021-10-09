import React,{useContext} from 'react'
import { GlobalContext } from './Context/GlobalState';


export const Transaction = ({transaction}) => {
    const{deleteTransaction}= useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+'; //checking if its less than 0
    return (
        <li className= {transaction.amount<0 ? 'Minus':'Plus'}>{transaction.text}
         <span>{sign}${Math.abs(transaction.amount)}</span><button onClick ={() => deleteTransaction(transaction.id)}className="delete">x</button> 
    </li>
    )
}// Math.abs removes whatever sign the user puts in

export default Transaction
