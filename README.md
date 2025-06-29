# 💬 React Chat App

A full-stack personal chat application built using **React**, **Express**, **MongoDB**, and **Tailwind CSS**. This app supports one-on-one messaging with image, video, and file sharing powered by **Cloudinary**. It includes authentication, user search, chat history, and responsive design with a modal preview for media.

---

## ✨ Features

- JWT-based authentication
- Search users by username
- One-on-one messaging
- Image, video, and file uploads (via Cloudinary)
- Responsive UI with Tailwind CSS
- Modal previews for media
- MongoDB message history

---

## 📁 Folder Structure

```
Chat_app/
├── chat-frontend/     # React app
├── chat-backend/      # Node.js + Express server
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/NirmalGamer/Chat_app.git
cd Chat_app
```

### 2. Frontend Setup

```bash
cd chat-frontend
npm install
npm run dev
```

### 3. Backend Setup

```bash
cd ../chat-backend
npm install
npm run dev
```

---

## 🌍 Routes

### 🔐 Frontend Routes

| Path       | Description       |
|------------|-------------------|
| `/login`   | Login page        |
| `/signup`  | Signup page       |
| `/`        | Chat interface    |

### ⚙️ Backend API Routes

| Method | Endpoint                                 | Description               |
|--------|------------------------------------------|---------------------------|
| POST   | `/api/login`                             | Authenticate user         |
| POST   | `/api/signup`                            | Register user             |
| GET    | `/find/finduser?username=xyz`            | Search user by username   |
| GET    | `/api/messages/history/:id1/:id2`        | Get message history       |
| POST   | `/api/messages/send`                     | Send message with media   |

---

## 🧪 Environment Variables

Create a `.env` file inside `chat-backend/` with:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

# Cloudinary credentials
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

> ⚠️ Replace values with your actual MongoDB and Cloudinary credentials.

---

## 📄 License

This project is licensed under the MIT License.  
See the [LICENSE](./LICENSE) file for details.
