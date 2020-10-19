import React from 'react';

function Header({income, expenses}) {
    const _income = income.map(i => i.amount, (item) => parseFloat(item));
    const _expenses = expenses.map(e => e.amount, (item) => parseFloat(item));
    const incomeSum = _income.length > 0 ? _income.reduce((acc, curr) => acc + curr) : 0;
    const expenseSum = _expenses.length > 0 ? _expenses.reduce((acc, curr) => acc + curr) : 0;
    const balance = incomeSum - expenseSum;

    return(
        <>
            <header className="vr-flex space-evenly">
                <p>Expense<strong>Tracker</strong></p>
                <div className="vr-flex">
                    <h3>Balance</h3>
                    <h3>${balance}</h3>
                </div>
                <div className="hr-flex">
                    <div className="col-6 center">
                        <h4>Income</h4>
                        <h4>${incomeSum}</h4>
                    </div>
                    <div className="col-6 center">
                        <h4>Expenses</h4>
                        <h4>${expenseSum}</h4>
                    </div>
                    
                </div>
            </header>
        </>
    )
}

export default Header;