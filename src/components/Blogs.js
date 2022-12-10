import axios from 'axios';
import React, { useEffect } from 'react'
import { useGlobalContext } from './context/context';


let API = "https://hn.algolia.com/api/v1/search?";

const Blogs = () => {
  const {state, dispatch} = useGlobalContext();


  const getSomeApi = async () => {
    
    try{

      const res = await axios.get(API);
      const data = await res.data;

      console.log(data);
    }

    catch(error){
      console.log(error.message);
    }

  }

  useEffect(() => {

    getSomeApi()

  })

  return (
    <div>Blogs</div>
  )
}

export default Blogs;