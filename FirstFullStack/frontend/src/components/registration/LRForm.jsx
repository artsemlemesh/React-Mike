import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../../../api";

const ACCESS_TOKEN = "access";
const REFRESH_TOKEN = "refresh";


function Form({route, method}){
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const name = method === 'login' ? 'Login': 'Register'

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            console.log('before')
            console.log(username, password)
            console.log(route)
            const res = await api.post(route, {username, password})
            if(method === 'login'){
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
                navigate('/')
            }else{
                navigate('/login')
            }
            // navigate('/')
            console.log('after')

        }catch(err){
            console.error(err)
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <h1>{name}</h1>
            <input
                type="text"
                value={username}
                onChange={(e)=> setUserName(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Password"
            />

            <button type="submit">{name}</button>
        </form>
    )
}

export default Form