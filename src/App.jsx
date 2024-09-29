import "./index.css";
import { InputBox } from "./components"; // don't have to '/index' as index file called by default
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { useState } from "react";
import useCurrencyCode from "./hooks/useCountryCode";

let backgroundImage = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST71Zd7B-71hfrT6vxW9mb8NA5hw3CXqJO7g&s`;

export default function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd"); // from currency
  const [to, setTo] = useState("inr"); // to currency
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from); // ! rate call with fromCurr param
  // console.log('before codes', currencyInfo);

  const options = Object.keys(useCurrencyCode()); // !code call
  // console.log(`typeof options`,typeof options);

  function swap() {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  function convert() {
    setConvertedAmount(amount * currencyInfo[to]);
  }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-200 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert;
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="from"
                amount={amount}
                setAmount={setAmount}
                CurrencyOptions={options}
                selectCurrency={from}
                setCurrency={(currency) => setFrom(currency)}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                onClick={swap}
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="to"
                amount={convertedAmount}
                setAmount={setConvertedAmount}
                CurrencyOptions={options}
                selectCurrency={to}
                setCurrency={(currency) => setTo(currency)}
              />
            </div>
            <button
              onClick={convert}
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              {from.toUpperCase()} Convert {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
