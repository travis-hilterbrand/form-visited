import React from "react";

const Form = (props) => {
  const formRef = React.useRef(null);
  React.useEffect(() => {
    if (formRef.current) {
      const inputEl = formRef.current.querySelector("input:first-child");
      if (inputEl) {
        inputEl.focus();
      }
    }
  }, [formRef]);
  return (
    <form ref={formRef} className={"NBSForm"}>
      {props.children}
    </form>
  );
};

export default Form;
