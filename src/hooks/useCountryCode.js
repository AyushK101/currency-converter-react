import axios from "axios"
import { useEffect, useState } from "react"


function useCurrencyCode() {
    let [codes, setCodes] = useState({})
    useEffect( ()=> {
        // console.log(`inside codes`);
        
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`
        axios.get(url)
        .then( res => setCodes(res.data))
    },[])
    // console.log(`codes ${JSON.stringify(codes)}`);
    
    return codes;
}


export default useCurrencyCode