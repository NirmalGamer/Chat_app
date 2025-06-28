export default function SearchUser({ searchUsername, setSearchUsername, handleSearch, searchError }) {
  return (
    <div className="flex gap-2 items-center mb-4">
      <input
        type="text"
        placeholder="Enter username to chat"
        className="border p-2 rounded flex-1"
        value={searchUsername}
        onChange={(e) => setSearchUsername(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Search
      </button>
      {searchError && <div className="text-red-500">{searchError}</div>}
    </div>
  );
}
