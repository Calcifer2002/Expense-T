import React, {useState, useContext} from 'react'
import { GlobalContext } from './Context/GlobalState'; //use state is a hook. to import hooks we use {}

export const AddTransaction = () => {
    const{addTransaction}= useContext(GlobalContext);
    const [text, setText] = useState('');// [initial state of app],T/A is the state value, setA/T is a function helps  change the state value
    const [amount, setAmount] = useState(0);
    

     const onSubmit = e =>{
         e.preventDefault();
         const newTransaction = {
             id: Math.floor(Math.random() * 100000000),
             text,
             amount: + amount //converts it to int// amount and text is same so instead of going amount : we just put in amount and text as it is already assigned the name amount and text in useState
         }
         setAmount("");
         setText("");

         addTransaction(newTransaction);

     }

    
    
    return (
        <div>
            <h3>Add a new transaction now!</h3>
            <form onSubmit = {onSubmit}>
                <div className="control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                     placeholder="Enter text..."/>
                    <label htmlFor="amount">Amount<br />(negative - expense, positive - income)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/> 
                

                </div>
                <button className="btn">Add the transaction</button>
            </form>
            
        </div>
    )
}
