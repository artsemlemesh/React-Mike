import { useState } from "react"


export default function ScrollIndicator({url}){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    async function fetchData(getUrl){

        try{ 
            setLoading(true);
            const response = await fetch(getUrl)
            const data = await response.json();

        } catch(e){
            console.log(e)
            setErrorMessage(e.message)
        }
    }

    useEffect(() => {
        fetchData(url)
    }, [url])

    return <div>

    </div>
}