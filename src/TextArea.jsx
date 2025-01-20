import { useState } from "react";
import Warning from "./Warning";

export default function TextArea() {
  const [text, setText] = useState("");

  const [warningText, setWarningText] = useState("");

  const handleChangeEvent = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      setWarningText("Scripts are not allowed!");

      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningText("@ are not allowed!");

      newText = newText.replace("@", "");
    } else {
      setWarningText("");
    }

    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChangeEvent}
        placeholder="Enter your text..."
        spellCheck="false"
      />
      {warningText ? <Warning text={warningText} /> : null}
    </div>
  );
}
