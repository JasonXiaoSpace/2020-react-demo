import React from "react";
import { connect } from "react-redux";

interface IOutputProps {
  submittedValue: any;
}

const Output: React.FunctionComponent<IOutputProps> = (props: IOutputProps) => {
  const reverseOsubmittedValue: string = props.submittedValue
    .split("")
    .reverse()
    .join("");

  return <div>Output:{reverseOsubmittedValue}</div>;
};

Output.defaultProps = {
  submittedValue: "Default Value",
};

function mapStateToProps(state: any) {
  return {
    submittedValue: state.submittedValue.submittedValue,
  };
}

export default connect(mapStateToProps)(Output);
