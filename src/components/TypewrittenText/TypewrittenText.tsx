import { FC, memo, useEffect, useRef, useState } from "react";

import { TypewrittenTextProps } from "./TypewrittenText.types";

const TypewrittenText: FC<TypewrittenTextProps> = (props) => {
  const [isElementInView, setIsElementInView] = useState(false);
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const textElementRef = useRef<HTMLParagraphElement | null>(null);
  const cursorRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const textElement = textElementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsElementInView(entry.isIntersecting);
      },
      { threshold: 1.0 }
    );

    if (textElement) {
      observer.observe(textElement);
    }

    return () => {
      if (textElement) {
        observer.unobserve(textElement);
      }
    };
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isElementInView && currentIndex < props.text.length) {
      timeout = setTimeout(() => {
        setText(
          (prev) => prev.replace("_", "") + props.text[currentIndex] + "_"
        );
        setCurrentIndex((prev) => prev + 1);
      }, 100);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex, isElementInView, props.text]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (cursorRef.current) {
        if (cursorRef.current.classList.contains("text-white")) {
          cursorRef.current.classList.remove("text-white");
          cursorRef.current.classList.add("text-black");
        } else {
          cursorRef.current.classList.remove("text-black");
          cursorRef.current.classList.add("text-white");
        }
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (text.length === props.text.length + 1) {
    return (
      <>
        <p className={props.className}>
          &nbsp;{text.slice(0, text.length - 1)}
          <span ref={cursorRef}>_</span>
        </p>
      </>
    );
  }

  return (
    <>
      <p className="sr-only">{props.text}</p>
      <p className={props.className} ref={textElementRef} aria-hidden="true">
        &nbsp;{text}
      </p>
    </>
  );
};

export default memo(TypewrittenText);
