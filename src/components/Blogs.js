import { useGlobalContext } from "./context/context";

const Blogs = () => {
  const { hits, dispatch, isLoading } = useGlobalContext();
  console.log(hits);

  const deleteData = (id) => {
    dispatch({
      type: "DELETE_DATA",
      payload: id,
    });
  };


  return (
    <>
      <div className="container">
        {isLoading ? (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {hits.map((elem) => {
              const { author, objectID, title, url, num_comments } = elem;
              return (
                <div className="col" key={objectID}>
                  <div className="card">
                    <div className="card-body">
                      <p className="card-text">{title}</p>
                      <p className="card-title">{author}</p>
                      <span>{num_comments}</span>
                      <div className="d-flex justify-content-between">
                        <a
                          className="btn btn-primary"
                          target="_blank"
                          href={url}
                        >
                          READ MORE
                        </a>
                        <a
                          href="#"
                          className="btn btn-danger"
                          onClick={() => deleteData(objectID)}
                        >
                          DELETE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="d-flex align-items-center">
            <strong>Loading...</strong>
            <div
              className="spinner-border ms-auto"
              role="status"
              aria-hidden="true"
            ></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Blogs;
