import React from "react";
import { useGlobalContext } from "./context/context";

const Pagination = () => {
  const { nbPages, page, dispatch } = useGlobalContext();

  return (
    <div className="container text-center">
      <div className="btn btn-group ">
        <button
          className="btn btn-outline-success"
          onClick={() => {
            dispatch({
              type: "DISPLAY_PREV_PAGE",
            });
          }}
        >
          PREV
        </button>
        <div className="mx-2 d-flex">
          <span className="h5">{page + 1}</span>
          of
          <span className="h5">{nbPages}</span>
        </div>
        <button
          className="btn btn-outline-success"
          onClick={() => {
            dispatch({
              type: "DISPLAY_NEXT_PAGE",
            });
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Pagination;
