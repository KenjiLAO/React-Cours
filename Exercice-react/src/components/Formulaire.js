import { useState } from "react";

function Formulaire(props) {

    const [titleEntered, setEnteredTitle] = useState();
    const [amountEntered, setEnteredAmount] = useState();
    const [dateEntered, setEnteredDate] = useState();

    const handleSubmit = event => {
        event.preventDefault();

        const prop = {
            title : titleEntered,
            amount : amountEntered,
            date : new Date(dateEntered)
        }
        props.onSaveExpenseData(prop);
        console.log(props)
        console.log(prop)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        alert('You have submitted the form.')
    }

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };


    return (
        <>
            <form id="form" onSubmit={handleSubmit}>
                <label>
                    Add title :
                    <input type="text" name="title1" value={titleEntered} onChange={titleChangeHandler}/>
                </label>
                <label>
                    Add amount :
                    <input type='number' name="amount" value={amountEntered} onChange={amountChangeHandler}/>
                </label>
                <label>
                    Add date :
                    <input type='date' name="date" value={dateEntered} onChange={dateChangeHandler}/>
                </label>
                <button type="submit">Create new expense</button>
            </form>
        </>
    );
}

export default Formulaire;