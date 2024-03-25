import { useState, useEffect, useRef } from "react";

const SpeedTyping = () => {
  const [typingAllowed, setTypingAllowed] = useState(false);
  const [time, setTime] = useState(15);
  const [wordCount, setWordCount] = useState(0);
  const textareaRef = useRef(null);

  const handleStartClick = () => {
    setTypingAllowed(true);
    setTime(15);
    setWordCount(0);
    textareaRef.current.focus();
  };

  const countWords = () => {
    const text = textareaRef.current.value.trim();
    if (text === "") {
      setWordCount(0);
    } else {
      const words = text.split(/\s+/);
      setWordCount(words.length);
    }
  };

  useEffect(() => {
    let interval;
    if (typingAllowed) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (time === 0) {
      setTypingAllowed(false);
      clearInterval(interval);
      countWords();
    }

    return () => clearInterval(interval);
  }, [typingAllowed, time]);

  return (
    <div className="text-center bg-black text-white w-full h-screen">
      <h1 className="text-2xl py-5">How many words can you type?</h1>
      <textarea
        cols="50"
        rows="10"
        className="text-black text-xl p-2"
        disabled={!typingAllowed}
        ref={textareaRef}
        onChange={countWords}
      ></textarea>
      <h2 className="text-xl py-3">Time remaining: {time} seconds</h2>
      {time === 0 && <h2 className="text-xl">Word Count: {wordCount}</h2>}
      <button
        className="m-5 px-7 py-2 bg-[#00b800] text-white"
        onClick={handleStartClick}
        disabled={typingAllowed || time === 0}
      >
        Start
      </button>
    </div>
  );
};

export default SpeedTyping;
