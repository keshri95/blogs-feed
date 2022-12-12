import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
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
      <Footer />
    </>
  );
}

export default App;
