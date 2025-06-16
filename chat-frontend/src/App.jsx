import { Routes, Route } from "react-router-dom";
import Chat from "./chatpage"
import ProtectedRoute from "./ProtectedRoute";
import Login from "./LoginPage";
import Signup from "./Signup";
import Logout from "./Logout";

function App() {

  return (
      <Routes>
        <Route path="/" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Logout" element={<ProtectedRoute><Logout /></ProtectedRoute>} />
      </Routes>
  );
}

export default App;
