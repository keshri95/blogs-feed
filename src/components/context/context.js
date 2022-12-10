import React, { useContext, useReducer } from "react";
import { reducer } from "../reducer/reducer";


const initialState = {
  hits: [],
  nbHits: 0,
  nbPages: 50,
  page: 0,
  query: ""
}

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state , dispatch] = useReducer(reducer, initialState);

  return (
    <>
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    </>
  );
};


const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext };
