
import {useAuth0} from '@auth0/auth0-react'
import Header from './header'
import SearchBox from './searchBox'
import UserMenu from './userMenu'
import UserProfile from './userProfile'
import Navigation from './Navigation'
import './nav.css'

const Nav = ({search, setSearch, searchproduct}) => {
    const {loginWithRedirect, logout, user, isAuthenticated} = useAuth0()


    return (
        <>
        <Header/>
        <div className='mid_header'>
            <div className='logo'>
                <img src='' alt='logo'/>
            </div>
            <SearchBox search={search} setSearch={setSearch} searchproduct={searchproduct} />
            <UserMenu isAuthenticated={isAuthenticated} loginWithRedirect={loginWithRedirect} logout={logout}/>
        </div>
        <div className='last_header'>
            <UserProfile isAuthenticated={isAuthenticated} user={user}/>
            {/* <Navigation/> */}
            <div className='offer'>
                <p>flat 10% over all iphone</p>
            </div>
        </div>
        </>
    )
}
export default  Nav