import Blogs from "./components/Blogs";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Navbar />
      <Search />
      <Pagination />
      <Blogs />
    </>
  );
}

export default App;
