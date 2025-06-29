import React, { useState } from "react";

export default function MessageList({
  messages,
  currentuser,
  currentUserId,
  recipientname,
  bottomRef,
}) {
  const [modalMedia, setModalMedia] = useState(null);

  const renderMedia = (msg) => {
    if (!msg.files || msg.files.length === 0) return null;

    return msg.files.map((url, i) => {
      const commonClasses =
        "max-w-xs max-h-[250px] my-1 rounded cursor-pointer object-cover";

      if (url.match(/\.(jpeg|jpg|png|gif)$/i)) {
        return (
          <img
            key={i}
            src={url}
            alt="sent"
            className={commonClasses}
            onClick={() => setModalMedia({ type: "image", url })}
          />
        );
      }

      if (url.match(/\.(mp4|webm|ogg)$/i)) {
        return (
          <video
            key={i}
            src={url}
            className={commonClasses}
            muted
            playsInline
            onClick={() => setModalMedia({ type: "video", url })}
          />
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
    <>
      <div className="flex-1 overflow-y-auto space-y-3 mb-4">
        {messages.map((msg, index) => {
          const prevMsg = messages[index - 1];
          const show = !prevMsg || prevMsg.sender !== msg.sender;

          return (
            <div key={msg._id} ref={index === messages.length - 1 ? bottomRef : null}>
              {show && <hr />}
              <div
                style={{
                  color: msg.sender === currentUserId ? "white" : "red",
                }}
              >
                {msg.text && <p className="whitespace-pre-wrap">{msg.text}</p>}
                {renderMedia(msg)}
                <span className="block text-xs text-gray-500 mt-1">
                  {new Date(msg.timestamp).toLocaleTimeString()} from{" "}
                  {msg.sender === currentUserId ? currentuser : recipientname}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {modalMedia && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setModalMedia(null)}
        >
          {modalMedia.type === "image" ? (
            <img
              src={modalMedia.url}
              alt="Full"
              className="max-w-full max-h-full object-contain"
            />
          ) : (
            <video
              src={modalMedia.url}
              className="max-w-full max-h-full"
              controls
              autoPlay
            />
          )}
        </div>
      )}
    </>
  );
}
