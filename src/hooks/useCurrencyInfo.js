import { useEffect, useState } from "react";
import axios from "axios";



function useCurrencyInfo(fromCurrency) {
    const [data, setData] = useState(0)
    
    useEffect( ()=>{
        axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`)
        .then( (res) => setData(res.data[fromCurrency]))



    },[fromCurrency])
    // console.log(data);
    return data;
}


export default useCurrencyInfo