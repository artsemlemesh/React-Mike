import { useEffect, useState } from "react";


export default function useFetch(url, options= {}){
//3 states

    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);//the same as loading
    const [error, setError] = useState(null);

    async function fetchData(){
        setPending(true)
        try {
            const response = await fetch(url, {...options})
            if(!response.ok) throw new Error(response.statusText);

            const result = await response.json();
            setData(result);
            setError(null);
            setPending(false)

        } catch(e) {
            setError(`${e}. Some error occured`)
            setPending(false)
        }
    }

    useEffect(() => {
        
        fetchData()
    }, [url]) //url as a dependency

    return {data, error, pending}

}