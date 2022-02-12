import React from "react";
import ButtonRequest from "./ButtonRequest";

const Form = ({ reqType, setReqType }) => {
  return (
    <form className="div" onSubmit={(e) => e.preventDefault()}>
      <ButtonRequest
        buttonText="users"
        reqType={reqType}
        setReqType={setReqType}
      />
      <ButtonRequest
        buttonText="posts"
        reqType={reqType}
        setReqType={setReqType}
      />
      <ButtonRequest
        buttonText="comments"
        reqType={reqType}
        setReqType={setReqType}
      />
    </form>
  );
};

export default Form;
