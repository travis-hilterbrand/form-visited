import React from "react";

import "./App.css";
import Form from "./Form";
import Input from "./Input";

function App() {
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("value2");
  const [value3, setValue3] = React.useState("");
  return (
    <div className="App" style={{ width: 500, padding: 16 }}>
      <Form>
        <Input
          id={"value1"}
          required={true}
          value={value1}
          onChange={(event) => setValue1(event.currentTarget.value)}
        />
        <Input
          id={"value2"}
          required={true}
          value={value2}
          onChange={(event) => setValue2(event.currentTarget.value)}
        />
      </Form>

      <Input
        id={"value3"}
        required={true}
        value={value3}
        onChange={(event) => setValue3(event.currentTarget.value)}
      />
    </div>
  );
}

export default App;
