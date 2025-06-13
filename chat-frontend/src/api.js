import axios from "axios";

const baseURL = "www.backend.com/messages";

// Function to send a message
export const sendMessage = (newMessage) =>
  axios.post(baseURL, newMessage, {
  });

// Function to get messages
export const getMessages = () =>
  axios.get(baseURL);
