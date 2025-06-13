import { Routes, Route } from "react-router-dom";
import ChatPage from "./chatpage"

function App() {

  return (
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
  );
}

export default App;
