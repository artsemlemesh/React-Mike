import { useEffect, useState } from "react";
import User from "./user";

export default function GitProfile() {
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("artsemlemesh");
  const [userData, setUserData] = useState(null);

  async function fetchData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    if (data) {
      setLoading(false);
      setUserData(data);
      setUserName("");
    }

    console.log(data);
  }

  function handleSearch() {
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="search-cont">
        <input value={userName} onChange={(e) => setUserName(e.target.value)} />
        <button onClick={handleSearch}>search</button>
      </div>
      <div className="content">

        {userData !== null ? <User user={userData}/> : null}
      </div>
    </>
  );
}
