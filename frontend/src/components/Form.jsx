import {useState} from 'react'
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import '../styles/Form.css'
import LoadingIndicator from './LoadingIndicator';


function Form({route, method}){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const name = method === 'login' ? 'Login' : 'Register'


    const handleSubmit = async (e) => {
        setLoading(true); //indicates that the form is in loading state and the loading indicator should be shown
        e.preventDefault();


        try {
            const res = await api.post(route, {username, password})
            if (method === 'login') {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate('/') //redirects user to the root route after successful login
            } else {
                navigate('/login')
            }
        } catch (error){
            alert(error)
        } finally {
            setLoading(false)//loading state has ended and the indicator should be hidden
        }

    };

    return <form onSubmit={handleSubmit} className='form-container'>
        <h1>{name}</h1>
        <input
            className='form-input'
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
        />
        <input
            className='form-input'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
        />
        
        {loading && <LoadingIndicator/>} {/* when loading is true, the indicator is being displayed*/}

        <button className='form-button' type='submit'>
            {name}
        </button>

    </form>

}


export default Form;