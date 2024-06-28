"use client";
import { useState } from "react";
import { palete } from "./ColorPallete";
import "../Colors/Colors.css";
import { Copy } from "lucide-react";
export default function Colors() {
  const [i, setI] = useState(0);
  const handleClick = () => {
    setI(Math.floor(Math.random() * 198));
  };
  return (
    <div className="w-screen h-screen flex items-end">
      <div
        className={`w-1/4 h-[90vh] tx`}
        style={{ backgroundColor: palete[i][0] }}
      >
        <p>{palete[i][0]}</p>
        <button
          onClick={() => {
            navigator.clipboard.writeText(palete[i][0]);
            alert("Text copied");
          }}
        >
          <Copy />
        </button>
      </div>
      <div
        className={`w-1/4 h-[90vh] tx`}
        style={{ backgroundColor: palete[i][1] }}
      >
        <p>{palete[i][1]}</p>
        <button
          onClick={() => {
            navigator.clipboard.writeText(palete[i][1]);
            alert("Text copied");
          }}
        >
          <Copy />
        </button>
      </div>
      <div
        className={`w-1/4 h-[90vh] tx`}
        style={{ backgroundColor: palete[i][2] }}
      >
        <p>{palete[i][2]}</p>
        <button
          onClick={() => {
            navigator.clipboard.writeText(palete[i][2]);
            alert("Text copied");
          }}
        >
          <Copy />
        </button>
      </div>
      <div
        className={`w-1/4 h-[90vh] tx`}
        style={{ backgroundColor: palete[i][3] }}
      >
        <p>{palete[i][3]}</p>
        <button
          onClick={() => {
            navigator.clipboard.writeText(palete[i][3]);
            alert("Text copied");
          }}
        >
          <Copy />
        </button>
      </div>
      <div
        className={`w-1/4 h-[90vh] tx`}
        style={{ backgroundColor: palete[i][4] }}
      >
        <p>{palete[i][4]}</p>
        <button
          onClick={() => {
            navigator.clipboard.writeText(palete[i][4]);
            alert("Text copied");
          }}
        >
          <Copy />
        </button>
      </div>
      <button
        className="absolute left-[50%] bottom-[10%] bg-black p-2 rounded-2xl"
        onClick={handleClick}
      >
        Randomize
      </button>
      <button
        className="absolute left-[50.05%] bottom-[5%] bg-black p-2 rounded-2xl text-xs"
        onClick={() => {
          navigator.clipboard.writeText(
            palete[i].toString().replaceAll(",", " ")
          );
          alert("Palette copied");
        }}
      >
        Copy full palete
      </button>
    </div>
  );
}
