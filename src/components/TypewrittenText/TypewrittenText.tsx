import { FC, useEffect, useState } from "react";

import { TypewrittenTextProps } from "./TypewrittenText.types";

const TypewrittenText: FC<TypewrittenTextProps> = (props) => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    if (currentIndex < props.text.length) {
      const timeout = setTimeout(() => {
        setText(
          (prev) => prev.replace("_", "") + props.text[currentIndex] + "_"
        );
        setCurrentIndex((prev) => prev + 1);
      }, 100);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [currentIndex, props.text]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsCursorVisible((prev) => !prev);
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
          <span className={isCursorVisible ? "text-white" : "text-black"}>
            _
          </span>
        </p>
      </>
    );
  }

  return <p className={props.className}>&nbsp;{text}</p>;
};

export default TypewrittenText;
