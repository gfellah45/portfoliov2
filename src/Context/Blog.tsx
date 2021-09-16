import React, { createContext, useReducer } from "react";
import { InitialStateType } from "../../types";
import { BlogAction } from "./actions";
import { initialState } from "./state";
import { reducer } from "./reducer";

// create and initialize the context
export const BlogContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<BlogAction>;
}>({ state: initialState, dispatch: () => undefined });

// create the provider
const BlogProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
