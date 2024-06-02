import { useState } from "react";

const Button = ({ text }) => {
  const [isClicked, setIsClicked] = useState(false);

  function clickButton() {
    setIsClicked(!isClicked);
  }

  return (
    <h1
      class={`text-center mx-2 px-3 py-1  shadow-gray-500/50  rounded-lg text-[15px] cursor-pointer active:scale-[.97] ${
        isClicked ? "bg-color4 text-white" : "bg-color3 text-color4"
      }`}
      onClick={clickButton}
    >
      {text}
    </h1>
  );
};

export default Button;
