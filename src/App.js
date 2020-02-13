import React, { useEffect, useState } from 'react'
import './App.css'

import InputBox from './components/input-box/input-box.component'

const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [amount, setAmount] = useState(1)
  const [isFromAmount, setIsFromAmount] = useState(true)
  const [currencyConvert, setCurrencyConvert] = useState()

  let toAmount, fromAmount

  if(isFromAmount) {
    fromAmount = amount
    toAmount = amount * currencyConvert
  } else {
    toAmount = amount
    fromAmount = amount / currencyConvert
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setCurrencyConvert(data.rates[firstCurrency])
      })
  }, [])



  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <InputBox
        currency={currencyOptions}
        selectedCurrency={fromCurrency}
        setCurrency={e => setFromCurrency(e.target.value)}
        value={fromAmount}
      />
      <div className='equals'>=</div>
      <InputBox
        currency={currencyOptions}
        selectedCurrency={toCurrency}
        setCurrency={e => setToCurrency(e.target.value)}
        value={toAmount}
      />
    </div>
  )
}

export default App
