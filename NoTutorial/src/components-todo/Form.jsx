import { useState } from "react"
import api from '../../api'
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";



export default function Form({route, method}){
    const [userName, setUsername]= useState('')
    const [userPassword, setUserPassword] = useState('');
    const [loading, setLoading] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()


        try{
            const res = await api.post(route, {userName, userPassword})
            if (method === 'login'){
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
            }

        }catch(e){
            console.log(e);
        }


    }





    return (
        <div>
            <h1>Login/register</h1>
            <form onSubmit={handleSubmit}>
            <input
                value={userName}
                type='text'
                onChange={(e)=> setUsername(e.target.value)}
                placeholder="enter the username"
            />
            <input
                value={userPassword}
                type="password"
                onChange={(e)=> setUserPassword(e.target.value)}
                placeholder="enter the password"
            />

            <button type="submit">
                login/reg
            </button>
            </form>
        </div>
    )
}