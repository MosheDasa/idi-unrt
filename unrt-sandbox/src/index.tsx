import React from "react";
import { createRoot } from "react-dom/client";
import { UnrtButton } from "unrt";
import "unrt/dist/styles.css";

const App = () => {
  return (
    <div>
      <h1>UNRT Sandbox</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <UnrtButton label="Default Button" />
        <UnrtButton label="Primary Button" variant="primary" />
        <UnrtButton label="Secondary Button" variant="secondary" />
      </div>
    </div>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
