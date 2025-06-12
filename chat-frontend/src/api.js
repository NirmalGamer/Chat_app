import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // or wherever your backend runs
});

// Function to send a message
export const sendMessage = (newMessage) => API.post("/messages", newMessage);

// Function to get messages
export const getMessages = () => API.get("/messages");