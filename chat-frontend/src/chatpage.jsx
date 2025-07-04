import { useState, useEffect, useRef } from "react";
import ChatHeader from "./ChatHeader";
import SearchUser from "./SearchUser";
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";
import { findUserByUsername, loadMessages, sendMessage } from "./api";
import { useNavigate } from "react-router-dom";

const currentUser = JSON.parse(localStorage.getItem("user"));
const currentUserId = currentUser?._id;

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);
  const [searchUsername, setSearchUsername] = useState("");
  const [recipient, setRecipient] = useState(null);
  const [searchError, setSearchError] = useState("");
  const bottomRef = useRef(null);
  const [shouldScroll, setShouldScroll] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    if (shouldScroll && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
      setShouldScroll(false);
    }
  }, [messages, shouldScroll]);
  useEffect(() => {
    if (recipient?._id) {
      loadChatHistory(true);
    }
  }, [recipient?._id]);



  const loadChatHistory = async (shouldScroll = false) => {
    if (!recipient?._id) return;
    try {
      const data = await loadMessages(currentUserId, recipient._id);
      setMessages(data);
      if (shouldScroll) setShouldScroll(true);
    } catch (err) {
      console.error("Fetch messages error:", err);
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if ((!text && files.length === 0) || !recipient?._id) return;

    try {
      await sendMessage({ sender: currentUserId, recipient: recipient._id, text, files });
      setText("");
      setFiles([]);
      await loadChatHistory(true);
    } catch (err) {
      console.error("Send error:", err);
    }
  };

  const handleSearch = async () => {
    if (!searchUsername.trim()) return;
    try {
      const foundUser = await findUserByUsername(searchUsername.trim());
      setRecipient(foundUser);
      setSearchError("");
    } catch (err) {
      setRecipient(null);
      setSearchError("User not found");
    }
  };

  useEffect(() => {
    loadChatHistory(false);
    const intervalId = setInterval(loadChatHistory, 1000);
    return () => clearInterval(intervalId);
  }, [recipient?._id]);

   useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleLogout = () => {
    navigate("/logout");
  };

  return (
    <div className="flex flex-col h-screen p-4 flex-1 overflow-y-auto" ref={bottomRef}>
      <SearchUser
        searchUsername={searchUsername}
        setSearchUsername={setSearchUsername}
        handleSearch={handleSearch}
        searchError={searchError}
      />
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Logout
      </button>

      {recipient && <ChatHeader recipient={recipient} />}
      {recipient?._id?
      <MessageList
        messages={messages}
        currentUserId={currentUserId}
        currentuser={currentUser?.name}
        recipientId={recipient?._id}
        recipientname={recipient?.name}
        bottomRef={bottomRef}
      />: ""}

      {recipient?._id?
        <MessageForm
          currentUserId={currentUserId}
          recipientId={recipient?._id}
          onMessageSent={loadChatHistory}
          text={text}
          setText={setText}
          files={files}
          setFiles={setFiles}
          handleSend={handleSend}
        /> : <h1 className="text-3xl font-bold">have a convo fr</h1>}
    </div>
  );
}
