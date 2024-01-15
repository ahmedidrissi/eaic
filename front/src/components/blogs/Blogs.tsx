import "./Blogs.css";
// fake blogs list
const blogs = [
  {
    id: "DS000",
    title: "Perceptron Convergence Theorem",
    description: "A mathematical proof of the convergence of the perceptron algorithm.",
    image: "https://miro.medium.com/v2/resize:fit:1290/format:webp/1*NWJOrzrrp3VVxoMxDXSkSg.png",
    author: "Adnanmajdoub",
    link: "https://medium.com/@adnanemajdoub/perceptron-convergence-theorem-c5b44cc06a08",
    date: "Nov 2, 2023",
    tags: ["Machine Learning", "Deep Learning", "Perceptron", "Mathematics"],
  },
  {
    id: "DS101",
    title: "Unleashing the Power of Data: A Comprehensive Guide",
    description:
      "Explore the world of data science and discover the latest trends, tools, and techniques to harness the potential of your data. From machine learning to data visualization, we've got you covered.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    author: "DataGeek123",
    link: "",
    date: "2024-01-15",
    tags: ["DataScience", "MachineLearning", "DataVisualization"],
  },
  {
    id: "DS202",
    title: "Demystifying Deep Learning: A Beginner's Journey",
    description:
      "Dive into the realm of deep learning with our step-by-step guide for beginners. Understand the basics, overcome challenges, and build your own neural networks. No PhD required!",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
    author: "NeuralExplorer",
    link: "",
    date: "2024-02-03",
    tags: ["DeepLearning", "NeuralNetworks", "BeginnersGuide"],
  },
  {
    id: "DS303",
    title: "Data Science in Action: Real-world Case Studies",
    description:
      "Learn how data science is making a real impact in various industries. Our blog features in-depth case studies, highlighting the applications and success stories of data-driven solutions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    author: "DataMaverick",
    link: "",
    date: "2024-03-22",
    tags: ["CaseStudies", "RealWorldApplications", "DataDriven"],
  },
  {
    id: "DS404",
    title: "The Art of Data Visualization: Telling Stories with Data",
    description:
      "Explore the creative side of data science. This blog delves into the art of data visualization, providing tips, tricks, and inspiring examples to help you tell compelling stories through your data.",
    image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0",
    author: "VizWizard",
    link: "",
    date: "2024-04-10",
    tags: ["DataViz", "DataStorytelling", "Visualization"],
  },
  {
    id: "DS505",
    title: "Mastering Python for Data Science: Tips and Tricks",
    description:
      "Elevate your Python skills for data science. From data manipulation to advanced analytics, this blog offers practical tips and tricks to help you become a Python pro in the world of data.",
    image: "https://images.unsplash.com/photo-1617240016072-d92174e44171",
    author: "PythonDataNinja",
    link: "",
    date: "2024-05-05",
    tags: ["Python", "DataManipulation", "Analytics"],
  },
];

function Blogs() {
  return (
    <>
      <section className="section blogs" id="blogs">
        <div className="container">
          <h2 className="text-center mb-3">Blogs</h2>
          <div className="row">
            {blogs.map((blog) => (
              <div className="col-lg-4 col-md-6 col-sm-12 gy-3" key={blog.id}>
                <div className="card text-light">
                  <img
                    src={blog.image}
                    className="card-img-top"
                    loading="lazy"
                    alt={blog.title}
                  />
                  <div className="card-body">
                    <div className="tags py-2">
                      {blog.tags.map((tag) => (
                        <span className="badge py-2 me-2 mb-1" key={tag}>
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
