import PropTypes from 'prop-types'
import { useId, useState } from 'react';  

function InputBox({
    label,
    amount,
    setAmount,
    setCurrency,
    CurrencyOptions=[],
    selectCurrency= 'usd',
    // amountDisable=false,
    // currencyDisable=false,
    
    // className = "",
}) {
    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex  `}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    // disabled={amountDisable}
                    value={amount}
                    onChange={e=> setAmount && setAmount(parseInt(e.target.value))} //!check if no value in setAmount
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    
                    onChange={e=> setCurrency && setCurrency(e.target.value) }
                    // disabled={currencyDisable}
                >
                    
                    {
                        CurrencyOptions.map( (currency)=> (
                            <option value={currency} key={currency}>
                            {currency}
                        </option>
                        ))
                    }
                
                </select>
            </div>
        </div>
    );
}

InputBox.propTypes = {
    label: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    setAmount: PropTypes.func.isRequired,
    setCurrency: PropTypes.func.isRequired,
    CurrencyOptions: PropTypes.array.isRequired,
    selectCurrency: PropTypes.string.isRequired,
    // amountDisable: PropTypes.bool.isRequired,
    // currencyDisable: PropTypes.bool.isRequired,
    // className: PropTypes.string.isRequired ,
};

export default InputBox;

