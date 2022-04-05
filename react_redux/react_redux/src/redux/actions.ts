export const Submit_Value = "Submit_Value";

export function submitValueAction(input: string) {
  return {
    type: Submit_Value,
    payload: {
      submittedValue: input,
    },
  };
}
