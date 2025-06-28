export default function ChatHeader({ recipient }) {
  return (
    <div className="text-green-700 mb-4">
      Chatting with <strong>{recipient.name}</strong>
    </div>
  );
}
