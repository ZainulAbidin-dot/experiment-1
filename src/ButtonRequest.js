import React from "react";

const ButtonRequest = ({ buttonText, reqType, setReqType }) => {
  return (
    <button type="button" onClick={() => setReqType(buttonText)}>
      {buttonText}
    </button>
  );
};

export default ButtonRequest;
