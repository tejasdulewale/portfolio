import React, { useEffect, useState } from "react";

const word = "developer";
const typingSpeed = 150; // ms per character
const deletingSpeed = 100; // ms per character
const pause = 1000; // pause before deleting/typing

export default function TypewriterSpan() {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!isDeleting && displayed.length < word.length) {
      timeout = setTimeout(() => {
        setDisplayed(word.slice(0, displayed.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayed.length === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(word.slice(0, displayed.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayed.length === 0) {
      timeout = setTimeout(() => setIsDeleting(false), pause);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting]);

  return (
    <span style={{ borderRight: "2px solid #333", paddingRight: 2 }}>
      {displayed}
    </span>
  );
}