import React, { useContext } from 'react'
import { GlobalContext } from './Context/GlobalState'

export const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((previous,next) => (previous +=next),0).toFixed(2);//adds and rounds off to two decimal places
    return (
        <div>
            <h4>Total Balance</h4>
            <h1 id="balance">{total}</h1>
            </div>
        
    )
}
