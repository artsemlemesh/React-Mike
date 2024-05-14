

export default function Search({search, setSearch, handleSearch}){



    return <div>
        <input
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>search weather</button>
    </div>
}