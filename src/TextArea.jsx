import { useState } from "react";
import Warning from "./Warning";

export default function TextArea() {
  const [text, setText] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [warningText, setWarningText] = useState("");

  const handleChangeEvent = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      setShowWarning(true);
      setWarningText("Scripts are not allowed!");

      newText = newText.replace("<script>", "");
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
      {showWarning ? <Warning text={warningText} /> : null}
    </div>
  );
}
