import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Dashboard from './components/dashboard';
import Expense from './components/expense';
import Income from './components/income';
import getItems from './services/getItems';
function App() {
  const [show, setShow] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [income, setIncome] = useState([])
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    setExpenses(getItems("expenses"));
    setIncome(getItems("income"));
  },[])

  const incomeBtn = (e) => {
    setShow(true);
  }
  
  
  const expenseBtn = (e) => {
    setShow(false);
  }
  
  const newExpense = (element) => {
    const _expenses = [...expenses];
    _expenses.push(element);
    localStorage.setItem("expenses", JSON.stringify(_expenses));
    setExpenses(JSON.parse(localStorage.getItem('expenses')));
  }

  const newIncome = (element) => {
    const _income = [...income];
    _income.push(element);
    localStorage.setItem("income", JSON.stringify(_income));
    setIncome(JSON.parse(localStorage.getItem('income')));
  }

  const removeExpense = (i) => {
    if(window.confirm(`Do you want to remove item?`)){
      const elements = JSON.parse(localStorage.getItem('expenses'));
      elements.splice(i, 1);
      localStorage.setItem("expenses", JSON.stringify(elements));
      setExpenses(elements);
      } else{
        return;
      }
  }

  const removeIncome = (i) => {
    if(window.confirm(`Do you want to remove item?`)){
      const elements = JSON.parse(localStorage.getItem('income'));
      elements.splice(i, 1);
      localStorage.setItem("income", JSON.stringify(elements));
      setIncome(elements);
      } else{
        return;
      }
  }

  return(
    <>
      <div className="page-layout">
        <Header income={income} expenses={expenses}/>
        <Dashboard expenseBtn={expenseBtn} incomeBtn={incomeBtn} show={show}>
          {
            show ? <Income display={income} toggle={toggle} handleToggle={() => setToggle(!toggle)} newIncome={newIncome} removeIncome={removeIncome} /> :
            <Expense display={expenses} toggle={toggle} handleToggle={() => setToggle(!toggle)} newExpense={newExpense} removeExpense={removeExpense} />
          }
        </Dashboard>
      </div>
    </>
  )
}

export default App;