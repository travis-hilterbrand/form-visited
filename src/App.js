import React from "react";

import "./App.css";
import Form from "./Form";
import Input from "./Input";

function App() {
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("value2");
  const [value3, setValue3] = React.useState("");
  const [valueNotRequired, setValueNotRequired] = React.useState("");
  return (
    <div className="App" style={{ width: 500, padding: 16 }}>
      <Form>
        <Input
          id={"value1"}
          placeholder={"Add a value"}
          required={true}
          value={value1}
          onChange={(event) => setValue1(event.currentTarget.value)}
        />
        <Input
          id={"value2"}
          placeholder={"Add a value"}
          required={true}
          value={value2}
          onChange={(event) => setValue2(event.currentTarget.value)}
        />
        <Input
          id={"valueNotRequired"}
          placeholder={"Add a value"}
          required={false}
          value={valueNotRequired}
          onChange={(event) => setValueNotRequired(event.currentTarget.value)}
        />
      </Form>

      <Input
        id={"value3"}
        placeholder={"Add a value"}
        required={true}
        value={value3}
        onChange={(event) => setValue3(event.currentTarget.value)}
      />
    </div>
  );
}

export default App;
