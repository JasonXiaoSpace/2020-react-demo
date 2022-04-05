import React, { FunctionComponent } from "react";
import Input from "./Input";
import Output from "./Output";

const MainApp: FunctionComponent = () => {
  return (
    <div className="App">
      <Input></Input>
      <div>-----------------</div>
      <Output />
    </div>
  );
};

export default MainApp;
