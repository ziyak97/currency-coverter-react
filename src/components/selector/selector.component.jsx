import React from 'react'

const Selector = ({ currency, selectedCurrency, setCurrency }) => (
    <span className='selector'>
        <select value={selectedCurrency} onChange={setCurrency}>
            {currency.map(data => (
                <option key={data} value={data}>{data}</option>
            ))}

        </select>
    </span>
)

export default Selector