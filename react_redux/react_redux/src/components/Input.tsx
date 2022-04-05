import React, { useState } from "react";

import { connect } from "react-redux";
import { submitValueAction } from "../redux/actions";

interface IProps {
    dispatch_submitValueAction: Function;
}

const Input = (props: IProps) => {
  const [inputValue, setInputValue] = useState("");

  const { dispatch_submitValueAction } = props;

  /** 改变 */
  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  /** 提交 */
  const handleSubmit = React.useCallback( (e) => {
    e.preventDefault();
    dispatch_submitValueAction(inputValue);
  }, [inputValue]);

  /** 重置 */
  const handleReset = () => {
    setInputValue('');
  };

  return (
    <div>
      <form  onSubmit={handleSubmit} onReset={handleReset}>
        <label>
          Input:
          <input type="text" value={inputValue} onChange={handleChange}></input>
        </label>
        <input type="submit" value="Submit"></input>
        <input type="reset" value="Clear"></input>
      </form>
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    submittedValue: state.submittedValue,
  };
}

const mapDispatchToProps = {
  dispatch_submitValueAction: submitValueAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
