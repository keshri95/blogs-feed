import React, { useContext, useReducer } from "react";
import { reducer } from "../reducer/reducer";

export const API = `https://hn.algolia.com/api/v1/search?`;

// const initialState = {
//   hits: [],
//   nbPages: 50,
//   page: 0,
//   query: "CSS",
//   isLoading: null,
// }

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    hits: [],
    nbPages: 50,
    page: 0,
    query: "CSS",
    isLoading: null,
  });

  return (
    <>
        <AppContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AppContext.Provider>
    </>
  );
};


const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext };
