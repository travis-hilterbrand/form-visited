import React from "react";
import { clone } from "lodash";

import FormContext from "./FormContext";

const Form = (props) => {
  const [visited, setVisited] = React.useState({});
  const handleSetVisited = (fieldId) => {
    const newVisited = clone(visited);
    newVisited[fieldId] = true;
    setVisited(newVisited);
  };

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
    <FormContext.Provider value={{ visited, setVisited: handleSetVisited }}>
      <form ref={formRef} className={"NBSForm"}>
        {props.children}
      </form>
    </FormContext.Provider>
  );
};

export default Form;
