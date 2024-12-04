import React from "react";

interface Props {
  text: string;
  onMouseUp: () => void;
  onMouseDown: () => void;
}
const ControlButton = ({ text, onMouseDown, onMouseUp }: Props) => {
  return (
    <button onMouseDown={onMouseDown} onMouseUp={onMouseUp} className="m-1 bg-gray-400 rounded-sm p-1">
      {text}
    </button>
  );
};

export default ControlButton;
