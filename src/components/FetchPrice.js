import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const API_ENDPOINT = 'https://api.kucoin.com/api/v1/market/orderbook/level1'

const StyledForm = styled.form`
 display: flex;
 flex-direction: column;
 align-items: center;
`

const StyledLabel = styled.label`
 font-size: 16px;
 margin-bottom: 5px;
`

const StyledInput = styled.input`
 padding: 10px;
 border: 2px solid #ccc;
 border-radius: 5px;
 font-size: 16px;
 margin-bottom: 10px;

 &:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
 }
`

const StyledButton = styled.button`
 background-color: #007bff;
 color: #fff;
 padding: 10px 20px;
 border: none;
 border-radius: 5px;
 cursor: pointer;
 font-size: 16px;
 font-weight: bold;
 transition: all 0.3s ease-in-out;

 &:hover {
  background-color: #0062cc;
 }

 &:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
 }
`

const StyledResult = styled.p`
 font-size: 16px;
 margin-top: 10px;
`

const PriceChecker = () => {
 const [symbol, setSymbol] = useState('')
 const [price, setPrice] = useState('')

 const fetchPrice = () => {
  axios
   .get(API_ENDPOINT, {
    params: {
     symbol: symbol,
    },
   })
   .then((response) => {
    const priceData = response.data.data
    if (priceData) {
     const priceValue = priceData.price
     setPrice(priceValue)
    } else {
     console.log('Price data not found')
    }
   })
   .catch((error) => {
    console.log(error)
   })
 }

 const handleSymbolChange = (event) => {
  setSymbol(event.target.value)
 }

 const handleSubmit = (event) => {
  event.preventDefault()
  fetchPrice()
 }

 return (
  <StyledForm onSubmit={handleSubmit}>
   <StyledLabel>
    Enter the cryptocurrency symbol you want to get the price for:
   </StyledLabel>
   <StyledInput type="text" value={symbol} onChange={handleSymbolChange} />
   <StyledButton type="submit">Get Price</StyledButton>
   {price && (
    <StyledResult>
     The current price of {symbol} is {price}
    </StyledResult>
   )}
  </StyledForm>
 )
}

export default PriceChecker
