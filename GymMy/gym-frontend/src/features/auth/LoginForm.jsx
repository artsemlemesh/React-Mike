import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./authSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" disabled={authStatus === "loading"}>

        {authStatus === 'loading' ? 'Logging in ...' : 'Login'}
      </button>
      {authStatus === 'failed' && <div>{error}</div>}
    </form>
  );
};

export default LoginForm