import React, { useState } from "react";

export const SecondsCounter = () => {
  const [number, setNumber] = useState(0);

  const handlerSumar = () => setNumber(number + 1);
  const handlerRestar = () => setNumber(number - 1);
  const handlerReset = () => setNumber(0);

  return (
    <div className="text-center" style={{ marginTop: 20 }}>
      {/* Muestra del número */}
      <div
        style={{
          display: "inline-block",
          background: "#111",
          color: "#fff",
          padding: "20px 40px",
          borderRadius: 6,
          fontSize: "2rem",
          fontFamily: "monospace",
        }}
      >
        {number.toString().padStart(6, "0")}
      </div>

      {/* Botones */}
      <div style={{ marginTop: 12 }}>
        <button onClick={handlerSumar} style={{ marginRight: 8 }}>
          +1
        </button>
        <button onClick={handlerRestar} style={{ marginRight: 8 }}>
          -1
        </button>
        <button onClick={handlerReset}>Reset</button>
      </div>
    </div>
  );
};