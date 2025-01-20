import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";

export default function Container() {
  const [text, setText] = useState("");

  const numberOfWords = text.split(" ").filter((word) => word !== "").length;

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats numberOfWords={numberOfWords} numberOfCharacters={text.length} />
    </main>
  );
}
