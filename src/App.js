import React from "react";

import "./App.css";
import Form from "./Form";
import Input from "./Input";

function App() {
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("value2");
  return (
    <div className="App" style={{ width: 500, padding: 16 }}>
      <Form>
        <Input
          value={value1}
          onChange={(event) => setValue1(event.currentTarget.value)}
        />
        <Input
          value={value2}
          onChange={(event) => setValue2(event.currentTarget.value)}
        />
      </Form>
    </div>
  );
}

export default App;
