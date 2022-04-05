import { Submit_Value } from "./actions";
import produce from "immer";

const initialState = {
  submittedValue: "",
};

export default function submitInputReducer (state = initialState, action:any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case Submit_Value:
        draft.submittedValue = action.payload.submittedValue;
        break;
    }
  });
}
