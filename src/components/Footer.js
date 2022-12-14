import { useEffect, useState } from "react";
const Footer = () => {

  const [backToTopButton, setBackToTopButton] = useState(false);

  let year = new Date().getFullYear();

  useEffect(() => {

    window.addEventListener(('scroll'), () => {

      window.scrollY > 100 ? setBackToTopButton(true) : setBackToTopButton(false)

    })


  }, []);
  

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <div className="py-2 bg-light">
        <div className="container">
          <p className="d-flex justify-content-center">
            &copy; Ashish Keshri {year}
          </p>
          <div className="position-fixed bottom-0 end-0 m-3">
          { backToTopButton && (
            <button className="btn btn-dark rounded-circle" onClick={() => scrollUp()}><i className="fa-solid fa-arrow-up"></i></button>
          )
           } 

          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
