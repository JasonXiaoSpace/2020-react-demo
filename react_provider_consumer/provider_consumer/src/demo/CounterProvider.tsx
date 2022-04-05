import React, { useState, useEffect, useCallback } from "react";

export const CounterContext = React.createContext(0);

export const CounterProvider = (props: any) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount( (count:number)=>{
        return count + 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <CounterContext.Provider value={count}>
      {props.children}
    </CounterContext.Provider>
  );
};
