import React from 'react';

type TransactionFormProps = {
    handleSubmit(amount: number): void
}
// React.Component<Props, State
export class TransactionForm extends React.Component<TransactionFormProps,{}> {
    render(){
        const {handleSubmit} = this.props
        return(
            <form onSubmit={(e)=>{e.preventDefault()
            handleSubmit(100)
            }}>
                <button>Submit</button>
            

            </form>
        )
}
}