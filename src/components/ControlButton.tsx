import React from "react";

interface Props {
  text: string;
}
const ControlButton = ({ text }: Props) => {
  return <button className="m-1 bg-gray-400 rounded-sm p-1">{text}</button>;
};

export default ControlButton;
