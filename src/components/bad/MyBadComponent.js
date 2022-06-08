import React from 'react'
import '../State.css';

export default function MyBadComponent() {

    let count = 0;

    function handleButtonClicked() {
        count++;
    }

    return (
        <div className="state">
            <span className="count">
                Count: {count}
            </span>
            <button onClick={handleButtonClicked}>
                +
            </button>
        </div>
    );
}
