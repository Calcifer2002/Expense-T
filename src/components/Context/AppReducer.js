export default (state, action)=> {
    switch(action.type){
        case 'Delete_Transaction':
            return{
                ...state,
                transactions: state.transactions.filter(transaction=>transaction.id!==action.payload) 
                //spread operator basically helps add just the elements of an array and not the array itself. basicslly it avoids[]
            }
        case 'Add_Transaction':
            return{
                    ...state,
                    transactions:[action.payload,...state.transactions]
                    //spread operator basically helps add just the elements of an array and not the array itself. basicslly it avoids[]
                }                                      //we are basically filtering out everything that has that id
        default:
            return state;
    }
}