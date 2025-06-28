import { useState } from "react";
import axios from "axios";

export default function MessageInput({ currentUserId, recipientId, onMessageSent, text, setText, files, setFiles, handleSend }) {


  return (
    <form onSubmit={handleSend} className="flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message…"
        className="flex-1 border rounded p-2"
      />
      <input
        name="files"
        type="file"
        multiple
        onChange={(e) => setFiles(Array.from(e.target.files))}
        className="border rounded p-1"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 rounded">
        Send
      </button>
    </form>
  );
}
