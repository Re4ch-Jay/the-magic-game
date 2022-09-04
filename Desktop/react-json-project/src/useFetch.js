import { useState } from "react";
import { useEffect } from "react";

const useFetch = (url) => {
    
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error("Data is not found :(")
                }
                return res.json();
            })
            .then(data => {
                setData(data)
                setError(null)
                setIsPending(false)
            })
            .catch(err => {
                setError(err.message)
                setIsPending(false)
            })
        }, 1000)
    }, [url])

    return {data, error, isPending};
}
 
export default useFetch;