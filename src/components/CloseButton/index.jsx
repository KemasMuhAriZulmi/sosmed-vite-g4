import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Register_Page } from "../../helper";

const CloseButton = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(Register_Page);
  };

  return (
    <AiOutlineClose
      size={32}
      color="white"
      onClick={handleNavigate}
      cursor={"pointer"}
    />
  );
};

export default CloseButton;
