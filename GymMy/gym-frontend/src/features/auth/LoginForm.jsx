import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "./authSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);
  const user = useSelector((state) => state.auth.user);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  const handleLogout = async () => {
    dispatch(logoutUser());
  };
  return (
    <div>
      {user ? (
        <button onClick={handleLogout}>
          {authStatus === "loading" ? "Logging out ..." : "Logout"}
        </button>
      ) : (
        <form onSubmit={handleLogin}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">
            {authStatus === "loading" ? "Logging in ..." : "Login"}
          </button>
        </form>
      )}
    </div>

    //   <form onSubmit={handleLogin}>
    //     <div>
    //       <label htmlFor="username">Username:</label>
    //       <input
    //         type="text"
    //         id="username"
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="password">Password:</label>
    //       <input
    //         type="password"
    //         id="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //     <button type="submit" disabled={authStatus === "loading"}>

    //       {authStatus === 'loading' ? 'Logging in ...' : 'Login'}
    //     </button>
    //     {authStatus === 'failed' && <div>{error}</div>}
    //   </form>
    // );
  );
};

export default LoginForm;
