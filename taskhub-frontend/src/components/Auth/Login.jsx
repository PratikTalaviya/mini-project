import React, { useState, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      // console.log(response.data);
      localStorage.setItem("userId", response.data.userId);
      // console.log(localStorage.getItem("userId"));
      setUser(response.data.userId);
      toast.success("Login Successful!!");
      setEmail("");
      setPassword("");
      setTimeout(() => {
        navigateTo("/dashboard");
      }, 1000);
    } catch (error) {
      console.error("Login failed:", error.response.data);
      toast.error(`Login Failed!! ${error.response.data.error}`);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="chk" aria-hidden="true">
        Log in
      </label>
      <input
        className="input"
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="input"
        type="password"
        name="pswd"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button>Log in</button>
      {/* <button>Log in with Google</button> */}
    </form>
  );
}

export default Login;
