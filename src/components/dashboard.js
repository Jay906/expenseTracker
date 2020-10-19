import React from 'react';

function Dashboard({ children, incomeBtn, expenseBtn, show }) {
    return(
        <>
            <section className="dashboard">
                <div className="container">
                    <article className="buttons">
                        <button className={show?"active":""} onClick={incomeBtn}>Income</button>
                        <button className={!show?"active":""} onClick={expenseBtn}>Expense</button>
                    </article>
                </div>
                <article className="transactions">
                    <div className="hr-flex space-between">
                        <h3 className="col-4">Title</h3>
                        <h3 className="col-4 center">Amount</h3>
                        <h3 className="col-4"></h3>
                    </div>
                    {children}
                </article>
            </section>
        </>
    )
}

export default Dashboard;