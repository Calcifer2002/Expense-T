import React, {useContext}from 'react'

import { GlobalContext } from './Context/GlobalState'


export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transactions=> transactions.amount);
   

    const Income = amounts.filter(nextM=> nextM>0).reduce((previousM,nextM)=>(previousM+=nextM),0).toFixed(2);

    const Expense = (
        amounts.filter(nextM => nextM<0).reduce((previousM,nextM)=>(previousM+=nextM),0)* -1).toFixed(2);
    

    
   
    return (
        <div className="I-E-Conatiner">
            <div>
                <h4>Income</h4>
                <p  className="Plus">{Income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="Minus">{Expense}</p>
            </div>
            
        </div>
    )
}
