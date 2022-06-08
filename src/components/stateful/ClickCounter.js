import React, { useState } from 'react'

export default function ClickCounter() {

    const [count, setCount] = useState(0);

    function handleButtonClicked() {
        setCount(count + 1);
    }

    return (
        <div className="state">
            <span className="count">Count: {count}</span>
            <button onClick={handleButtonClicked}>
                +
            </button>
        </div>
    );
}
