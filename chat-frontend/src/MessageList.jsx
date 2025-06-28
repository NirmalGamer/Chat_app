import React, { useRef, useEffect } from "react";

export default function MessageList({ messages, currentuser, currentUserId,recipientname }) {

  const renderMedia = (msg) => {
    if (!msg.files || msg.files.length === 0) return null;
    return msg.files.map((url, i) => {
      if (url.match(/\.(jpeg|jpg|png|gif)$/)) {
        return (
          <img
            key={i}
            src={url}
            alt="sent"
            className="max-w-xs rounded my-1"
            style={{ maxWidth: "250px", maxHeight: "250px", objectFit: "cover" }}
          />
        );
      }
      if (url.match(/\.(mp4|webm|ogg)$/)) {
        return (
          <video
            key={i}
            controls
            className="max-w-xs my-1"
            style={{ maxWidth: "250px", maxHeight: "250px", objectFit: "cover" }}
          >
            <source src={url} />
          </video>
        );
      }
      return (
        <a
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block underline"
        >
          📄 {url}
        </a>
      );
    });
  };

  return (
    <div className="flex-1 overflow-y-auto space-y-3 mb-4">
      {messages.map((msg, index) => {
      const prevMsg = messages[index - 1];
      const show = !prevMsg || prevMsg.sender !== msg.sender;
      return (
      <div key={msg._id}>
        {show && <hr />}
        <div
          style={msg.sender === currentUserId ? { color: "white" } : { color: "red" }}
        >
          {msg.text && <p className="whitespace-pre-wrap">{msg.text}</p>}
          {renderMedia(msg)}
          <span className="block text-xs text-gray-500 mt-1">
            {new Date(msg.timestamp).toLocaleTimeString()} from{" "}
            {msg.sender === currentUserId ? currentuser : recipientname}
          </span>
        </div>
      </div>
      )})}
    </div>
  );
}
