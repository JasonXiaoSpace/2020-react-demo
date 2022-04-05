import "./App.css";
import React from "react";
import { CounterProvider } from "./demo/CounterProvider";
import { DisplayCount } from "./demo/DisplayCount";

const App = () => {
  return (
    <CounterProvider>
      <div>
        <DisplayCount />
      </div>
    </CounterProvider>
  );
};

export default App;
