import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./api.js";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(form);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Login failed", err);
    }
  };

  return (
    <>
    Enter Login details <br></br>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      Don't have an account? <br></br>
      <button
        onClick={handleSignup}
        className="mt-4 text-sm text-white hover:underline"
      >
        Sign up
      </button>
    </>
  );
};

export default Login;
