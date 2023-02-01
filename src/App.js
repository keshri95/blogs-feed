import React, { Profiler, Suspense } from "react";
const Navbar = React.lazy(() => import("./components/Navbar"));
const Footer = React.lazy(() => import("./components/Footer"));
const Blogs = React.lazy(() => import("./components/Blogs"));
const Pagination = React.lazy(() => import("./components/Pagination"));
const Search = React.lazy(() => import("./components/Search"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading.....</div>}>
        <Profiler>
          <Navbar />
          <Profiler>
            <Search />
          </Profiler>
          <Profiler>
            <Pagination />
          </Profiler>
          <Blogs />
          <Footer />
        </Profiler>
      </Suspense>
    </>
  );
}

export default App;
