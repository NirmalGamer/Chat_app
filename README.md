# React Chat App

A full-stack, real-time personal chat application built with React, Express, MongoDB, and Tailwind CSS. This app allows users to sign up and log in, search for other users, and engage in one-on-one conversations with full media support, including image and video previews via Cloudinary integration. The chat interface is responsive, smooth, and user-friendly, offering features like message history, file sharing, and modal-based media viewing. Perfect as a starter messaging app or portfolio project.

## Features

- JWT-based authentication
- Search users by username
- One-on-one messaging
- Send images, videos, and files
- Responsive UI with Tailwind CSS
- Modal preview for media
- Media uploads handled via Cloudinary

## Environment Variables

Create a `.env` file in backend directory:

### Backend (`chat-backend/.env`)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# Cloudinary config
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

## Routes

### Frontend

- `/login` — Login page
- `/signup` — Signup page
- `/` — Chat interface (protected)

### Backend

- `POST /api/login` — Authenticate user
- `POST /api/signup` — Create user
- `GET /find/finduser?username=xyz` — Find user by username
- `GET /api/messages/history/:id1/:id2` — Get chat history
- `POST /api/messages/send` — Send a message (with media)

## License

This project is licensed under the MIT License.  
See the [LICENSE](./LICENSE) file for details.

## Installation

```bash
# Clone the repo
git clone https://github.com/NirmalGamer/Chat_app.git
cd Chat_app

```bash
# Frontend
cd chat-frontend
npm install
npm run dev

# Backend
cd chat-backend
npm install
npm run dev

## Environment Variables

Create a `.env` file in backend directory:

### Backend (`chat-backend/.env`)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# Cloudinary config
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret