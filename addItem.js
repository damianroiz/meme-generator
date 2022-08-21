import React from 'react';

import ReactDom from 'react-dom';

function App() {

    const [thingsArray, setThingsArray] = React.useState('Thing 1', 'Thing 2'); 

    function addItem() {
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
        })
    }

    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    return (
        <div>
            <button onClick={addItem}>
            Add Item
            </button>
            {thingsElements}
        </div>
    )

}

ReactDom.render(<App />, document.getElementById('root'))