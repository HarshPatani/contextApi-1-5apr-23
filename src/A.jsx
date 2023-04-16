import { useState } from "react";
import B from "./components/B";
import { InputContext } from "./context/InputContext";

function A() {
  const [value, setValue] = useState("");
  const [send1, setsend1] = useState("");
  const [send2, setSend2] = useState("");

  return (
    <div style={{ border: "3px solid black", padding: "1rem" }}>
      <h2>A COMPONENT</h2>
      <p>
        Value From D - <b>{send2}</b>
      </p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => setsend1(value)}>Send Data to Child</button>
      <InputContext.Provider value={{ send1, setSend2 }}>
        <B />
      </InputContext.Provider>
    </div>
  );
}

export default A;
