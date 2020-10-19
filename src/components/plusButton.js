import React from 'react';

function PlusButton({toggle, handleToggle}) {
    return(
        <button onClick={handleToggle} className={toggle?"add":"show-add"}>
            +
        </button>
    )
}

export default PlusButton;