"use client";
import React from "react";
import ControlButton from "./ControlButton";
import useSocket from "@/hooks/websockets/useControlSocket";

const ControlPanel = () => {
  const { sendMessage } = useSocket(
    "http://127.0.0.1:8000"
  );

  return (
    <div className="flex flex-col items-center w-full mt-4">
      <div>
        <ControlButton
          text="Adelante"
          onMouseDown={() => sendMessage("control", "adelante")}
          onMouseUp={()=> sendMessage("control","detener")}
        ></ControlButton>
      </div>
      <div className="flex">
        <ControlButton
          onMouseDown={() => sendMessage("control", "izquierda")}
          onMouseUp={()=> sendMessage("control","detener")}
          text="Izquierda"
        />
        <ControlButton
          onMouseDown={() => sendMessage("control", "bocina")}
          onMouseUp={()=> sendMessage("control","detener")}
          text="Bocina"
        />
        <ControlButton
          onMouseDown={() => sendMessage("control", "derecha")}
          onMouseUp={()=> sendMessage("control","detener")}
          text="Derecha"
        />
      </div>
      <div>
        <ControlButton
          onMouseDown={() => sendMessage("control", "atras")}
          onMouseUp={()=> sendMessage("control","detener")}
          text="Atrás"
        />
      </div>
    </div>
  );
};

export default ControlPanel;
