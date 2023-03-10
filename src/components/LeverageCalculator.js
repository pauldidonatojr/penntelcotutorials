import React, { useState } from 'react'
import styled from 'styled-components'

const LeverageCalculator = () => {
 // State variables for input values and result
 const [currentPrice, setCurrentPrice] = useState('')
 const [position, setPosition] = useState('')
 const [targetPrice, setTargetPrice] = useState('')
 const [leverage, setLeverage] = useState(1)
 const [positionSize, setPositionSize] = useState('')
 const [result, setResult] = useState(null)

 const handleCalculate = () => {
  // Calculate the profit based on the input values
  const profit = (targetPrice - currentPrice) * leverage * positionSize

  // Update the state to display the result
  setResult(profit.toFixed(2))
 }

 return (
  <Wrapper>
   <InputWrapper>
    <label htmlFor="current-price">Current Price:</label>
    <input
     type="number"
     id="current-price"
     value={currentPrice}
     onChange={(e) => setCurrentPrice(parseFloat(e.target.value))}
    />
   </InputWrapper>
   <InputWrapper>
    <label htmlFor="position">Position:</label>
    <select
     id="position"
     value={position}
     onChange={(e) => setPosition(parseFloat(e.target.value))}
    >
     <option value="">Select</option>
     <option value="1">Long</option>
     <option value="-1">Short</option>
    </select>
   </InputWrapper>
   <InputWrapper>
    <label htmlFor="target-price">Target Price:</label>
    <input
     type="number"
     id="target-price"
     value={targetPrice}
     onChange={(e) => setTargetPrice(parseFloat(e.target.value))}
    />
   </InputWrapper>
   <InputWrapper>
    <label htmlFor="leverage">Leverage:</label>
    <select
     id="leverage"
     value={leverage}
     onChange={(e) => setLeverage(parseFloat(e.target.value))}
    >
     <option value="1">1x</option>
     <option value="2">2x</option>
     <option value="5">5x</option>
     <option value="10">10x</option>
     <option value="20">20x</option>
    </select>
   </InputWrapper>
   <InputWrapper>
    <label htmlFor="position-size">Position Size:</label>
    <input
     type="number"
     id="position-size"
     value={positionSize}
     onChange={(e) => setPositionSize(parseFloat(e.target.value))}
    />
   </InputWrapper>
   <ButtonWrapper>
    <button onClick={handleCalculate}>Calculate</button>
   </ButtonWrapper>
   {result !== null && (
    <ResultWrapper>
     <p>
      If you enter a {position > 0 ? 'long' : 'short'} position at{' '}
      {currentPrice} with a target price of {targetPrice} and a leverage of{' '}
      {leverage}x, your profit will be {result} USD.
     </p>
             </ResultWrapper>


         )}
         
  </Wrapper>
 )
}
const Wrapper = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`

const InputWrapper = styled.div`
 display: flex;
 align-items: center;
 margin-bottom: 1rem;

 label {
  margin-right: 0.5rem;
 }

 input,
 select {
  padding: 0.5rem;
 }
`

const ButtonWrapper = styled.div`
 margin-top: 1rem;

 button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
 }

 button:hover {
  background-color: #0069d9;
 }
`
const ResultWrapper = styled.div`
 margin-top: 1rem;

 p {
  font-size: 1.2rem;
  font-weight: bold;
 }
`
export default LeverageCalculator
