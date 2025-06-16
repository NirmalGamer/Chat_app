import axios from "axios";
const token = localStorage.getItem("token");
const baseURL = "http://localhost:5000/messages";

// Function to send a message
export const sendMessage = (newMessage) =>
  axios.post(baseURL, newMessage, {
    headers: {
    Authorization: `Bearer ${token}`
    }
  });

// Function to get messages
export const getMessages = () =>
  axios.get(baseURL, {
  headers: {
    Authorization: `Bearer ${token}`
  }
});
