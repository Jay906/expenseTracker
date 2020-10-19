import React from 'react';
import Form from './form';
import PlusButton from './plusButton';
import {FaTrash} from 'react-icons/fa';

function Income({display, toggle, handleToggle, newIncome, removeIncome}) {
    return(
        <>
            {display.map((d, i) => (
                <div className="hr-flex space-between table" key={d.id + d.title + d.amount + Math.random()}>
                    <div className="col-4">{d.title}</div>
                    <div className="col-4 center">${d.amount}</div>
                    <div className="col-4 center"><button className="remove-item" onClick={() => removeIncome(i)}><FaTrash /></button></div>
                </div>
            ))}
            <PlusButton toggle={toggle} handleToggle={handleToggle}/>
            <Form toggle={toggle} handleToggle={handleToggle} handleSubmit={newIncome}/>
        </>
    )
}

export default Income;