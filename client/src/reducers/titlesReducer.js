import { FETCH_TITLES } from "../actions/types";

const initialState = {
  titles: [],
};

export default function titlesReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case FETCH_TITLES:
        console.log("payload: ", action.payload)
      return {
        titles: [...action.payload.titles],
      };
    default:
      return state;
  }
}
