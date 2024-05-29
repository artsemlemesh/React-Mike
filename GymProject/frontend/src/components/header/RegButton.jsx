import { FiLogIn} from 'react-icons/fi'
import {CiLogout } from 'react-icons/ci'


const RegButton = () => {

    // global context for isAuthenticated

    return (
        <>
        <div className=' flex justify-end items-center space-x-2 p-4'>

        
        <div>{false? <CiLogout/> : <FiLogIn/>}</div>
        <div>{false? (<button className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'>Logout</button>):(<button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>Login</button>)}</div>
        </div>
        </>
    )

}


export default RegButton