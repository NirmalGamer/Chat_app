import { useEffect, useState } from "react";
import { sendMessage, getMessages } from "./api";
import Form from "./Form"

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    loadMessages();
  }, []);

  async function loadMessages() {
    setInterval(async () => {
      const res = await getMessages();
      setMessages(res.data);
    }, 1000);
  }

  return (
    <>
      <Form sendmsg={sendMessage} />

      <ul>
        {messages.map((msg) => (
          <li key={msg._id}><strong>{msg.username}</strong>: {msg.message}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
