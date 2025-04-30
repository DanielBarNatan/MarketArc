export default function SearchBar() {
  return (
    <div className="w-full max-w-2xl">
      <input
        type="text"
        placeholder="Search for stock events..."
        className="w-full p-2 border rounded"
      />
    </div>
  );
}
