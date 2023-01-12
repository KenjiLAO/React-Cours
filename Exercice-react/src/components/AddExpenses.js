import Formulaire from "./Formulaire";

const AddExpenses = props => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    };

    return (
        <div className='new-expense'>
            <Formulaire
                onSaveExpenseData={saveExpenseDataHandler}
            />
        </div>
    );
}

export default AddExpenses;