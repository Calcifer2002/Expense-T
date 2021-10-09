import Reac, { useContext } from 'react'
import { GlobalContext } from './Context/GlobalState'
import Transaction from './Transaction';
export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);
   // const  context = useContext(globalContext);
// console.log(context)!~!!!!!!!!!!!
    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
            {transactions.map(transaction =>(<Transaction key={transaction.id} transaction = {transaction}/>))} 
                
            </ul>
        </div>
    )// since transaction is an array we are basically mapping/looping through it to display one thing at a time.
}   //transaction being passed in as a prop
