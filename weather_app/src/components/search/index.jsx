

export default function Search({search, setSearch, handleSearch}){



    return <div className="search-engine">
        <input
            type="text"
            placeholder="enter city name"
            name='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <button  onClick={handleSearch}>search weather</button>
    </div>
}