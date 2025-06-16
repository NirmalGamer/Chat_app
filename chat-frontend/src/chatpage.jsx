import { useEffect, useState } from "react";
import { sendMessage, getMessages } from "./api";
import Form from "./Form"

function ChatPage() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
  const interval = setInterval(async () => {
    const res = await getMessages();
    setMessages(res.data);
  }, 1000);

  return () => clearInterval(interval); // cleanup
}, [messages]);

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

export default ChatPage