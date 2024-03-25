const App = () => {
  return (
    <div className="text-center bg-black text-white w-full h-screen">
      <h1 className="text-2xl py-5">How many words can you type?</h1>
      <textarea
        cols="50"
        rows="10"
        className="text-black text-xl p-2"
        disabled
      ></textarea>
      <h2 className="text-xl py-3">Time remaining: </h2>
      <button className="m-5 px-7 py-2 bg-[#00b800] text-white">Start</button>
      <h2 className="text-xl">Word Count: </h2>
    </div>
  );
};

export default App;
