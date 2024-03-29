import React, { useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { reducer } from "../reducer/reducer";


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    hits: [],
    nbPages: 0,
    page: 0,
    query: "",
    isLoading: true,
  });
  
  let API = `https://hn.algolia.com/api/v1/search?`;

  const getSomeApi = async (url) => {

    dispatch({
      type: "LOADING",
    });

    try {
      const res = await axios.get(url);
      const data = await res.data;

      console.log(data);

      dispatch({
        type: "DISPLAY_DATA",
        payload: {
          hits: data.hits, 
          nbPages: data.nbPages,
        },
      });

    } catch (error) {
      console.log(error.message);
    }
  };


  useEffect(() => {
    getSomeApi(`${API}query=${state.query}&page=${state.page}`);

  },[state.query, state.page]);



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
