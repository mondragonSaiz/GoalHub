import { useReducer } from "react";

export const reducer = (state, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}
