import { CounterContext } from "./CounterProvider";
export const DisplayCount = () => (
  <CounterContext.Consumer>
    {(value: any) => {
      return <div>秒表当前值 {value}</div>;
    }}
  </CounterContext.Consumer>
);
