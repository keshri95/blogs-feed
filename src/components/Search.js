import React from 'react'
import { useGlobalContext } from './context/context';

const Search = () => {

  const { dispatch, query } = useGlobalContext();

  const searchBlogs = (id) => {
    dispatch({
      type: "SEARCH_BLOGS",
      payload: id,
    })
  }


  return (
    <div className='container'>
      <form onSubmit={(e) => e.preventDefault()}>

        <input className="form-control" type="text" placeholder='Search here..' value={query} onChange={(e) =>searchBlogs(e.target.value) } 
        />

      </form>
    </div>
  )
}

export default Search;