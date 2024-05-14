import { useEffect } from "react"
import { useState } from "react"



export default function useFetch(url){

    const [ data, setData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fetchData(){
        setLoading(true)
        try{
            const res =await fetch(url)
            if(!res.ok) throw new Error(res.statusText)
            const data = await res.json()
            setData(data)
            setError(null)
            setLoading(false)
        } catch(e){
            setError(`${e}, error occured`)
            setLoading(false)
        }



    }

    useEffect(()=>{
        fetchData()
    }, [url])

    return {data, loading, error}
}