import './App.css'
import { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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
  const data = {
    labels: expenses.map((item) => item.expense),
    datasets: [
        {
          label: 'Amount',
          data: expenses.map((item) => item.amount),
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }
    ]
  }
  const options = {
    responsive: true,
    plugins: {
      legend: {position: 'top'},
      title: { display: true, text: 'Expenses Bar Chart'}
    }
  };

  return (
    <>
      <div>
        <div>
          <label>List of Expenses:</label>
          {
            expenses.map((item)=>(
              <li key={item.id}>
                {item.expense} - ${item.amount} - {item.date.toLocaleDateString()}
              </li>
            ))
          }
        </div>
        <div>
          <label>Input an Expense</label><br/>
          <input placeholder='Expense' required type='text' value={expense} 
            onChange={(e) => setExpense(e.target.value)}></input><br/>
          <input placeholder='Amount' required type='number' value={amount}
            onChange={(e) => setAmount(e.target.value)}></input><br/>
          <input placeholder='Date' required type='date' value={date}
            onChange={(e) => setDate(e.target.value)}></input><br/>

          <button onClick={addExpense}>Add</button>
        </div>

      </div>
      <div>
        <label>Analyze Finance</label>
        {
          expenses.length > 0 ? (

            <Bar data={data} options={options} />
          ) : (
            <p>No expenses available</p>
          )
        }
      </div>
      <button>Expenses</button>
      <button>Visualize</button>
    </> 
  )
}

export default App
