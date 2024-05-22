import {AiOutlineSearch} from 'react-icons/ai'
import './nav.css'
import { useContext } from 'react'
import { GlobalContext } from '../../GlobalContext'

    // const {search, setSearch, searchProduct} = useContext(GlobalContext)

const SearchBox = ({search, setSearch, searchProduct}) => (
    <div className="search_box">
        <input
            type="text"
            value={search}
            placeholder="search"
            onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchProduct}>
            <AiOutlineSearch/>
        </button>

    </div>
)


export default SearchBox