import React from "react";

interface Props {
  text: string;
  onClick: () => void;
}
const ControlButton = ({ text, onClick }: Props) => {
  return (
    <button onClick={onClick} className="m-1 bg-gray-400 rounded-sm p-1">
      {text}
    </button>
  );
};

export default ControlButton;
