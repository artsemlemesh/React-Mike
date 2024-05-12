import { useEffect, useState } from "react";
import User from "../components/one-user";

const One = () => {
  const [user, setUser] = useState("artsemlemesh");
  const [userData, setUserData] = useState(null);

  async function fetchUser() {
    try {
      const request = await fetch(`https://api.github.com/users/${user}`);
      const data = await request.json();
      console.log(data)
      if (data) {
        setUserData(data);
      }
    } catch (e) {
      console.log(e);
    }
  }


  useEffect(()=> {
    fetchUser()

  }, [])

  return (
    <>
    <div>
      <input value={user} onChange={(e) => setUser(e.target.value)} />
      <button onClick={() => fetchUser()}>search</button>
    </div>
    <div>
        {userData !== null ? <User data={userData}/> : null}
    </div>
    </>
  );
};

export default One;
