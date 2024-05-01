import { useEffect, useState } from "react";
import User from "./user";

export default function Appp() {
    const [user, setUser] = useState('artsemlemesh');
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(false)

    async function fetchData(){
        try{
            setLoading(true)
            const response = await fetch(`https://api.github.com/users/${user}`)
            const data = await response.json()
            setData(data)
            setLoading(false)
            setUser('')


            console.log(data)

        } catch(e){
            console.log(e)
            setLoading(false)
            setUser('')

        }
    }

    function handleSubmit(){
        fetchData()
    }

    useEffect(() => {
        fetchData()
    }, [])

    if(loading){
        return <h1>loading.wait</h1>
    }

    return (
        <>
            <div>
                <input value={user} onChange={(e) => setUser(e.target.value)}/>
                <button onClick={handleSubmit}> Search </button>
            </div> 
            {data !== null ? <User user={data}/> : null}
        </>
    )



}
