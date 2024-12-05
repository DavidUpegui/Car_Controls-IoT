"use client";
import React from "react";
import ControlButton from "./ControlButton";
import useSocket from "@/hooks/websockets/useControlSocket";

const ControlPanel = () => {
  const { sendMessage } = useSocket(
    "http://192.168.10.24:8000"
  );

  return (
    <div className="flex flex-col items-center w-full mt-4 space-y-4">
      {/* Botón Adelante */}
      <div className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition-transform transform active:scale-95">
        <ControlButton
          text="🢁"
          onMouseDown={() => sendMessage("control", "0")}
          onMouseUp={() => sendMessage("control", "4")}
        />
      </div>

      {/* Botones Izquierda, Bocina y Derecha */}
      <div className="flex space-x-4">
        <div className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition-transform transform active:scale-95">
          <ControlButton
            text="🢀"
            onMouseDown={() => sendMessage("control", "2")}
            onMouseUp={() => sendMessage("control", "4")}
          />
        </div>
        <div className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition-transform transform active:scale-95">
          <ControlButton
            text="⚡"
            onMouseDown={() => sendMessage("control", "5")}
            onMouseUp={() => sendMessage("control", "4")}
          />
        </div>
        <div className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition-transform transform active:scale-95">
          <ControlButton
            text="🢂"
            onMouseDown={() => sendMessage("control", "3")}
            onMouseUp={() => sendMessage("control", "4")}
          />
        </div>
      </div>

      {/* Botón Atrás */}
      <div className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition-transform transform active:scale-95">
        <ControlButton
          text="🢃"
          onMouseDown={() => sendMessage("control", "1")}
          onMouseUp={() => sendMessage("control", "4")}
        />
      </div>
    </div>


  );
};

export default ControlPanel;
