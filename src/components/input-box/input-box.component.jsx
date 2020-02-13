import React from 'react'

import './input-box.styles.css'

import Selector from '../selector/selector.component'

const inputBox = ({ currency, selectedCurrency, setCurrency, value, onChangeAmount }) => (
    <div className='input-box'>
        <input
         className='input' 
         type='number' 
         value={value}
         onChange={onChangeAmount}
         />
        <Selector
            currency={currency}
            selectedCurrency={selectedCurrency}
            setCurrency={setCurrency}
        />
    </div>
)

export default inputBox