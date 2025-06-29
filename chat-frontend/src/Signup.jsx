import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/signup", form);
      console.log(res.data)
      localStorage.setItem("token", res.data.token); 
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/")
    } catch (err) {
      alert("Signup failed: " + err.response?.data?.message || err.message);
    }
  };

  return (
    <>
      Create an account <br></br>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Sign Up</button>
      </form>
      Already have an account? <br></br>
      <button
        onClick={handleLogin}
        className="mt-4 text-sm text-white hover:underline"
      >
        Login
      </button>
    </>
  );
};

export default Signup;
