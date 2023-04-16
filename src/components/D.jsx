import { useState } from "react";
import { useInputContext } from "../context/InputContext";

function D() {
  const [value2, setValue2] = useState("");
  const { send1, setSend2 } = useInputContext();

  return (
    <div style={{ border: "1px solid black", padding: "1rem", margin: "1rem" }}>
      <h2>D COMPONENT</h2>
      <p>
        Value From A - <b>{send1}</b>
      </p>
      <input
        type="text"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
      <button onClick={() => setSend2(value2)}>Send Data to Parent</button>
    </div>
  );
}

export default D;
