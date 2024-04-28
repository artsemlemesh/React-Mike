// import { useEffect, useState } from "react";
// import User from "./user";
// import './styles.css'


// export default function GitProfileFinder() {
//     const [userName, setUserName] = useState('artsemlemesh');
//     const [userData, setUserData] = useState(null)
//     const [loading, setLoading] = useState(false)

//     async function fetchUserData(){ //func to fetch data,
//         setLoading(true)
//         const res = await fetch(`https://api.github.com/users/${userName}`) //fetches data from the github
//         const data = await res.json();//parses the response into JSON format

//         if(data){ //if there is data, it sets it as a userdata, then stop loading anim, refreshes the input
//             setUserData(data)
//             setLoading(false)
//             setUserName('')
//         }

//         console.log(data)
//     }

//     function handleSubmit(){ //upon clicking submit, launches the function which fetches the data
//         fetchUserData()
//     }

//   useEffect(() => { // fetches the data when the page gets loaded the first time
//     fetchUserData()
//  }, [])

//  if (loading) { //can be loading animation
//     return <h1>loading data. please wait</h1>
//  }

//     return (
//     <div className="github-profile-container">
//       <div className="input-wrapper">
//         <input
//           name="search-by-username"
//           type="text"
//           placeholder="Search github username..."
//           value={userName}
//           onChange ={(e) => setUserName(e.target.value)} // anytime when the data in input field changes the setUserName fires and gets data from the input
//         />
//         <button onClick={handleSubmit}>Search</button>
//       </div>
//       {userData !== null ?<User user={userData}/> : null }        {/* displays user component or null */}

//     </div>
//   );
// }

import { useState, useEffect } from "react";
import User from './user'
import './styles.css'

export default function GitProfileFinder() {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState("artsemlemesh");
  const [error, setError] = useState(null);

  async function fetchUserData() {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();

      if(data){
        setUserData(data);
        setLoading(false)
        setUserName('');
      }

      console.log(data)

    } catch (e) {
      setError(e);
      console.log(e);
      setLoading(false);
    }
    
  }

  function handleSubmit(){
    fetchUserData()
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  if(loading){
    return <h1>data is loading. Please wait</h1>
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="search github username..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {userData !== null ? <User user={userData}/> : null}
    </div>
  );
}
