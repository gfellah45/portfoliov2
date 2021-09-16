import { InitialStateType } from "../../types";
import { initialState } from "./state";
import { BlogAction } from "./actions";

export const reducer = (
  state = initialState,
  action: BlogAction
): InitialStateType => {
  switch (action.type) {
    case "All_Blog_Post":
      return {
        ...state,
        blogs: action.payload,
      };
    case "Single_Blog_Post":
      return {
        ...state,
        singleBlog: action.payload,
      };

    default:
      return state;
  }
};
