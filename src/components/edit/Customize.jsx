import { useEffect } from "react";
import { useState } from "react";
import "../../styles/customize.scss";

function Customize() {
  useEffect(() => {}, []);
  function setColor(color) {
    document.documentElement.style.setProperty("--resume-accent", color);
  }
  function setFont(font) {
    document.documentElement.style.setProperty("--resume-font-family", font);
  }

  const [currFont, setCurrFont] = useState("roboto");

  return (
    <div className="customize">
      <div className="color">
        <h2>Color</h2>
        <div>
          <p>Color Accent</p>
          <input
            type="color"
            defaultValue="#0891b2"
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>
      <div className="fonts">
        <h2>Fonts</h2>
        <div>
          <button
            className="roboto"
            id={currFont === "roboto" ? "active" : undefined}
            onClick={() => {
              setFont("Roboto");
              setCurrFont("roboto");
            }}
          >
            <h3>Aa</h3>
            <p>Roboto</p>
          </button>
          <button
            className="noto-sans"
            id={currFont === "noto-sans" ? "active" : undefined}
            onClick={() => {
              setFont("Noto Sans");
              setCurrFont("noto-sans");
            }}
          >
            <h3>Aa</h3>
            <p>Sans</p>
          </button>
          <button
            className="serif"
            id={currFont === "serif" ? "active" : undefined}
            onClick={() => {
              setFont("sans-serif");
              setCurrFont("serif");
            }}
          >
            <h3>Aa</h3>
            <p>Serif</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Customize;
