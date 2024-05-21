import {AiOutlineSearch} from 'react-icons/ai'
import './nav.css'


const SearchBox = ({search, setSearch, searchproduct}) => (
    <div className="search_box">
        <input
            type="text"
            value={search}
            placeholder="search"
            onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchproduct}>
            <AiOutlineSearch/>
        </button>

    </div>
)


export default SearchBox