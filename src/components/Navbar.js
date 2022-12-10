import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar navbar-expand-lg mb-3 bg-dark ">
        <div className="container">
          <Link to="/" className="navbar-brand text-light">
            Blogs Feed
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
