import React, { useState } from 'react';

function Form({toggle, handleToggle, handleSubmit}) {
    const [newTitle, setNewTitle] = useState("");
    const [newAmount, setNewAmount] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            title: newTitle,
            amount: parseFloat(newAmount),
        };
        handleSubmit(newItem);
        setNewTitle("");
        setNewAmount("");
    }

    return(
        <form className={toggle?"":"remove-form"} onSubmit={onSubmit}>
            <div className="form">
                <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Title..." required={true} />
                <input type="number" value={newAmount} onChange={(e) => setNewAmount(e.target.value)} placeholder="Amount..." required={true} />
            </div>
            <button type="submit">Submit</button>
            <button className="remove" type="button" onClick={handleToggle}>x</button>
        </form>
    )
}

export default Form;