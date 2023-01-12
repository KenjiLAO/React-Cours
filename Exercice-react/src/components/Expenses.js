import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses(props) {
  return (

    <div>
      <Card className="expenses">
      { props.items.map((expenses) => (
        <ExpenseItem
        key = {expenses.id}
        title = {expenses.title}
        amount = {expenses.amount}
        date = {expenses.date}
      />
      ))}
    </Card>
    </div>
    
  );
}

export default Expenses;
