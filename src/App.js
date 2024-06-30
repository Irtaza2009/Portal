import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      axios
        .get(`${API_URL}/users`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    }
  }, [loggedIn]);

  const API_URL = "http://localhost:5000/api";

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setLoggedIn(true);
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <LoginForm login={login} />
      ) : (
        <div>
          <h1>User List</h1>
          <ul>
            {users.map((user) => (
              <li key={user._id}>
                <h2>{user.name}</h2>
                <p>{user.job}</p>
                <p>{user.techSkills}</p>
                <p>{user.about}</p>
                <a href={user.linkedin}>LinkedIn</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function LoginForm({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default App;
