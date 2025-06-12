import { useState } from "react";

function Form({ sendmsg }) {
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        if (!username || !message) return;

        try {
        await sendmsg({ username, message });
        } catch(err) {
        console.error('❌ Axios error:', err.response?.data || err.message);
        }

        setMessage("");
    };

    return (
        <form id="send" onSubmit={handleSubmit}>
            <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            /> 
            <input
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default Form