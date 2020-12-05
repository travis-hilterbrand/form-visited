import { createContext } from "react";

const FormContext = createContext({
  visited: {},
  setVisited: (visited) => {},
});

export default FormContext;
