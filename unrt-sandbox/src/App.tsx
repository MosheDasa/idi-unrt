import React from "react";
import { UnrtButton } from "unrt";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>unrt Component Library Sandbox</h1>
      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <UnrtButton
          label="Primary Button"
          variant="primary"
          onClick={() => console.log("Primary clicked!")}
        />
        <UnrtButton
          label="Secondary Button"
          variant="secondary"
          onClick={() => console.log("Secondary clicked!")}
        />
      </div>
    </div>
  );
}
