import React from "react";
import clsx from "clsx";

import FormContext from "./FormContext";

const Input = (props) => {
  const { visited, setVisited } = React.useContext(FormContext);
  console.error("visited", visited);
  const { required = false, ...otherProps } = props;
  let { id, placeholder = "", value = "" } = props;
  if (required) {
    placeholder += " (required)";
  }

  const showRequired = required && value.length === 0 && visited[id];
  const inputClass = clsx("NBSInput", { showRequired });
  const handleBlur = () => {
    setVisited(id);
  };
  return (
    <div>
      <input
        className={inputClass}
        {...otherProps}
        placeholder={placeholder}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Input;
