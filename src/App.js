import { Blogs } from "./components/Blogs";
import { useGlobalContext } from "./components/context/context";
import { Pagination } from "./components/Pagination";
import { Search } from "./components/Search";

function App() {
  const data = useGlobalContext();
  console.log(data)
  return (
      <>
      {data}

      <Search />
      <Pagination />
      <Blogs />
      </>
  );
}

export default App;
