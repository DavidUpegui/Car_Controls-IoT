"use client";
import React from "react";
import ControlButton from "./ControlButton";
import useSocket from "@/hooks/websockets/useControlSocket";

const ControlPanel = () => {
  const { sendMessage } = useSocket(
    "http://192.168.10.24:8000"
  );

  return (
    <div className="flex flex-col items-center w-full mt-4">
      <div>
        <ControlButton
          text="Adelante"
          onMouseDown={() => sendMessage("control", "0")}
          onMouseUp={()=> sendMessage("control","detener")}
        ></ControlButton>
      </div>
      <div className="flex">
        <ControlButton
          onMouseDown={() => sendMessage("control", "2")}
          onMouseUp={()=> sendMessage("control","detener")}
          text="Izquierda"
        />
        <ControlButton
          onMouseDown={() => sendMessage("control", "5")}
          onMouseUp={()=> sendMessage("control","detener")}
          text="Bocina"
        />
        <ControlButton
          onMouseDown={() => sendMessage("control", "3")}
          onMouseUp={()=> sendMessage("control","detener")}
          text="Derecha"
        />
      </div>
      <div>
        <ControlButton
          onMouseDown={() => sendMessage("control", "1")}
          onMouseUp={()=> sendMessage("control","detener")}
          text="Atrás"
        />
      </div>
    </div>
  );
};

export default ControlPanel;
