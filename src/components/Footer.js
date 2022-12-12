const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <>
      <div className="py-2 bg-light">
        <div className="container">
          <p className="d-flex justify-content-center">&copy; Ashish Keshri {year}</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
