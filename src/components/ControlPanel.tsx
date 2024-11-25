import React from "react";
import ControlButton from "./ControlButton";

const ControlPanel = () => {
  return (
    <div className="flex flex-col items-center w-full mt-4">
      <div>
        <ControlButton text="Arriba"></ControlButton>
      </div>
      <div className="flex">
        <ControlButton text="Izquierda"/>
        <ControlButton text="Bocina"/>
        <ControlButton text="Derecha"/>
      </div>
      <div>
        <ControlButton text="Abajo"/>
      </div>
    </div>
  );
};

export default ControlPanel;
