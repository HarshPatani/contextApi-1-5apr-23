import { useState } from "react";
import C from "./C";

function B() {
  return (
    <div style={{ border: "1px solid black", padding: "1rem", margin: "1rem" }}>
      <h2>B COMPONENT</h2>
      <C />
    </div>
  );
}

export default B;
