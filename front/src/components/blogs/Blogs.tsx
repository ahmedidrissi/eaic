import { useEffect, useState } from "react";
import useGetBlogs from "../../hooks/useGetBlogs";
import "./Blogs.css";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    useGetBlogs().then((blogs) => {
      setBlogs(blogs);      
    });
  }, []);

  return (
    <>
      <section className="section blogs" id="blogs">
        <div className="container">
          <h2 className="text-center mb-5">Blogs</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 d-flex justify-content-center">
            {blogs.map((blog: any) => (
              <div className="col" key={blog._id}>
                <div className="card text-light">
                  <img
                    src={blog.image}
                    className="card-img-top"
                    loading="lazy"
                    alt={blog.title}
                  />
                  <div className="card-body">
                    <div className="tags py-2">
                      {blog.tags.map((tag: any, index: number) => (
                        <span className="badge py-2 me-2 mb-1" key={index}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.description}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <small>
                      By {blog.author} on {blog.date}
                    </small>
                    <a href={blog.link} className="btn" target="_blank">
                      <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
