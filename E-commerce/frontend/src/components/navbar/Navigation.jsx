
import {Link} from 'react-router-dom'
import './nav.css'
const Navigation = () => (
    <div className="nav">
        <ul>
            <li><Link to='/' className='link'>Home</Link></li>
            <li><Link to='/shop' className='link'>Shop</Link></li>
            <li><Link to='/cart' className='link'>Cart</Link></li>
            <li><Link to='/about' className='link'>About</Link></li>
            <li><Link to='/contact' className='link'>Contact</Link></li>
        </ul>

    </div>
)
export default Navigation