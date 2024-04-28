import { useEffect, useState } from "react"
import MyUser from "./myuser"
import './mystyles.css'

export default function GitHub(){
    const [userName, setUserName] = useState('artsemlemesh')
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchData(){
        setLoading(true)
        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();

        if(data){
            setUserData(data)
            setLoading(false)
            setUserName('')
        }
        console.log(data)
        
    }

    function handleSubmit(){
        fetchData()
    }

    

    useEffect(() => {
        fetchData()
    }, [])

    if(loading){
        return <h1> loading data. wait please</h1>
    }

    return (
        <div>
            <div>
                <input
                name='search-by-username'
                type='text'
                placeholder="search github username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                />
                <button onClick={handleSubmit}>search</button>
            </div>
            {userData !== null ? <MyUser user={userData}/> : null}
        </div>

    )
}