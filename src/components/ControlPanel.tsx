"use client";
import React from "react";
import ControlButton from "./ControlButton";
import useSocket from "@/hooks/websockets/useControlSocket";

const ControlPanel = () => {
  const { isConnected, response, sendMessage } = useSocket(
    "http://127.0.0.1:8000"
  );

  return (
    <div className="flex flex-col items-center w-full mt-4">
      <div>
        <ControlButton
          text="Adelante"
          onClick={() => sendMessage("control", "adelante")}
        ></ControlButton>
      </div>
      <div className="flex">
        <ControlButton
          onClick={() => sendMessage("control", "izquierda")}
          text="Izquierda"
        />
        <ControlButton
          onClick={() => sendMessage("control", "bocina")}
          text="Bocina"
        />
        <ControlButton
          onClick={() => sendMessage("control", "derecha")}
          text="Derecha"
        />
      </div>
      <div>
        <ControlButton
          onClick={() => sendMessage("control", "atras")}
          text="Atrás"
        />
      </div>
    </div>
  );
};

export default ControlPanel;
