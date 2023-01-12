import './App.css';
import Expenses from './components/Expenses';
import Formulaire from './components/Formulaire';
import { useReducer, useState } from 'react';
import AddExpenses from './components/AddExpenses';
import { useCallback } from 'react';
import { MyAppContextProvider } from './store/appContext';

let expenses1 = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  const compteur = { count: 5,
    timeUsed: 0
  };

  const tekken = {
    isMale: true,
    character: "Jin",
    gender: "male"
  }

  const myReducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1,
          timeUsed: state.timeUsed + 1
        };
      case 'decrement':
        return { count: state.count - 1, 
          timeUsed: state.timeUsed + 1
        };
      default:
        return state;
    }
  }

  const myReducer1 = (state, action) => {
    switch (action.type) {
      case 'change':
        console.log("ersvsrebv")
        return { ...state,isMale: !state.isMale
        };
      default:
        return state;
    }
  }

  const [expenses, setExpenses] = useState(expenses1);

  const [tekken1, setTekken] = useReducer(myReducer1, tekken)
  const [counter, setCounter] = useReducer(myReducer, compteur)

  const addExpenseHandler = (expense) => {
    setExpenses((myExpense) => {
      return [expense, ...myExpense];
    });
  };


  return (
    <div>
      <h2>C'est parti</h2>
      <AddExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <button onClick={() => setCounter({ type: 'decrement' })}>-</button>
      <button onClick={() => setCounter({ type: 'increment' })}>+</button>
      <div>Compteur : {counter.count}</div>
      <div>Nombre de fois utilisé :{counter.timeUsed}</div>

      <button onClick={() => setTekken({type: 'change'})}>Change character</button>

      <div>
        {tekken1.isMale && <p>{tekken1.character} + {tekken1.gender}</p>}
        {!tekken1.isMale && <p>{"Asuka"} + {"female"}</p>}

      </div>      
    </div>
  );
}

export default App;
