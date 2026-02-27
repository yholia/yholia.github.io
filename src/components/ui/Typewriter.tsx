import { useState, useEffect, useCallback } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function Typewriter({
  words,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className,
}: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      setText(currentWord.substring(0, text.length - 1));
    } else {
      setText(currentWord.substring(0, text.length + 1));
    }
  }, [isDeleting, text, wordIndex, words]);

  useEffect(() => {
    const currentWord = words[wordIndex];

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, tick, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {text}
      <span className="animate-pulse text-accent">|</span>
    </span>
  );
}
