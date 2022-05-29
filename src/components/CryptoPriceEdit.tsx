import { InputNumber } from 'antd';
import React, { useState } from 'react'
import { CRYPTO_EXCHANGE_RATES_TO_USD } from './CryptoPrice';

function CryptoPriceEdit({currencySymbol, onPriceChange}: { currencySymbol: string, onPriceChange?: ({cryptoPrice, fiatPrice}: {cryptoPrice?: number, fiatPrice?: number}) => void}) {

  const [cryptoPrice, setCryptoPrice] = useState(0);
  const [fiatPrice, setFiatPrice] = useState(0);

  const USD_SYMBOL = "USD";

  const handleOnChange = (value: number, currencyChanged: string) => {

    let changedFiatPrice, changedCryptoPrice;

    if (currencyChanged === USD_SYMBOL) {
        changedFiatPrice = value;
        setFiatPrice(changedFiatPrice);
    } else {
        changedCryptoPrice = value;
    }
    if(currencySymbol in CRYPTO_EXCHANGE_RATES_TO_USD) {
        if (currencyChanged === USD_SYMBOL) {
            changedCryptoPrice = value * 1/CRYPTO_EXCHANGE_RATES_TO_USD[currencySymbol];
        } else {
            changedFiatPrice = value * CRYPTO_EXCHANGE_RATES_TO_USD[currencySymbol];
        }
    }
    if(changedFiatPrice) {
        setFiatPrice(changedFiatPrice);
    }
    
    if(changedCryptoPrice) {
        setCryptoPrice(changedCryptoPrice);
    }
    if(changedFiatPrice) {
        setFiatPrice(changedFiatPrice);
    }

    console.log({changedCryptoPrice, changedFiatPrice});

    if (onPriceChange) {
        onPriceChange({cryptoPrice: changedCryptoPrice, fiatPrice: changedFiatPrice})
    }
    
  }
  
  return (
    <div>
        <div className='mb-3'>
            <InputNumber prefix={currencySymbol} style={{ width: '100%' }} value={cryptoPrice} name={currencySymbol} onChange={value=>handleOnChange(value, currencySymbol)}/>
        </div>
         
         {currencySymbol in CRYPTO_EXCHANGE_RATES_TO_USD && 
         <div className='mb-3'>
             <InputNumber prefix={USD_SYMBOL} style={{ width: '100%' }} value={fiatPrice} name={USD_SYMBOL} 
         onChange={value=>handleOnChange(value, USD_SYMBOL)} />
         </div>
         }
         
    </div>
  )
}

export default CryptoPriceEdit