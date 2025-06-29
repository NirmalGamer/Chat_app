import axios from "axios";

const backendUrl = "http://localhost:5000";

const axiosInstance = axios.create({
  baseURL: backendUrl
  });

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const findUserByUsername = async (username) => {
  const { data } = await axiosInstance.get("/find/finduser", {
    params: { username },
  });
  return data.recepient;
};

export const loadMessages = async (userId1, userId2) => {
  const { data } = await axiosInstance.get(`/api/messages/history/${userId1}/${userId2}`);
  return data;
};

export const sendMessage = async ({ sender, recipient, text, files }) => {
  const fd = new FormData();
  fd.append("sender", sender);
  fd.append("recipient", recipient);
  fd.append("text", text);
  files.forEach((f) => fd.append("files", f));

  const { data } = await axiosInstance.post("/api/messages/send", fd, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const loginUser = async (formData) => {
  const res = await axios.post(
    `${backendUrl}/api/login`,
    formData
  );
  return res.data;
};
