import './App.css'
import { useState } from 'react'

function App() {

  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [expenses, setExpenses] = useState([]);

  function addExpense() {
    if(!expense || !amount || !date || isNaN(amount)){
      alert("Please fill out all input.");
      return;
    }
    console.log("Add expense");
    const newExpense = {
      id: Date.now(), 
      expense, 
      amount: parseFloat(amount), 
      date: new Date(date)
    };
    setExpenses([...expenses, newExpense]);
    setExpense('');
    setAmount('');
    setDate('');
  }

  return (
    <>
      <div>
        <div>
          <label>Expenses</label>
          {
            expenses.map((item)=>(
              <li key={item.id}>
                {item.expense} - ${item.amount} - {item.date.toLocaleDateString()}
              </li>
            ))
          }
        </div>
        <input placeholder='Expense' required type='text' value={expense} 
          onChange={(e) => setExpense(e.target.value)}></input><br/>
        <input placeholder='Amount' required type='number' value={amount}
          onChange={(e) => setAmount(e.target.value)}></input><br/>
        <input placeholder='Date' required type='date' value={date}
          onChange={(e) => setDate(e.target.value)}></input><br/>

        <button onClick={addExpense}>Add</button>
      </div>
      <button>Expenses</button>
      <button>Visualize</button>
    </> 
  )
}

export default App
