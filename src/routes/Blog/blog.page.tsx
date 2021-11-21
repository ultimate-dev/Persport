import moment from "moment";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import htmlParser from "html-react-parser";
// Components
import Header from "../../components/Header";
// Utils
import slugify from "../../utils/slugfiy";

export default () => {
  const blog = {
    image:
      "https://images.unsplash.com/photo-1502691876148-a84978e59af8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<p><br/><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br/><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
    date: new Date(),
  };

  const blogs = [
    {
      id: 1,
      tag: "Backend Development",
      image:
        "https://images.unsplash.com/photo-1495218128687-72d990041786?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: new Date(),
    },
    {
      id: 2,
      tag: "Frontend Development",
      image:
        "https://images.unsplash.com/photo-1506792006437-256b665541e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Ut enim ad minim veniam.",
      date: new Date(),
    },
    {
      id: 3,
      tag: "Design Systems",
      image:
        "https://images.unsplash.com/photo-1580566176138-daa588058b59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Duis aute irure dolor in reprehenderit in voluptate.",
      date: new Date(),
    },
    {
      id: 4,
      tag: "Web Frameworks",
      image:
        "https://images.unsplash.com/photo-1565619624098-cf4168a7cd9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      title: "Excepteur sint occaecat cupidatat non proident.",
      date: new Date(),
    },
  ];

  return (
    <Fragment>
      {
        // Start Header
      }
      <Header.Breadcrumb
        title={blog.title}
        breadcrumbs={[
          {
            name: "Home",
            to: "/",
          },
          {
            name: "Blogs",
            to: "/blogs",
          },
        ]}
      />
      {
        // End Header
        // Start Section
      }
      <section>
        <div className="container mx-auto py-10">
          <div className="flex flex-wrap">
            <div className="lg:w-3/4 w-full">
              <div className="py-3">
                <div
                  className="border border-secondary-400 p-3"
                  data-aos="fade-up"
                >
                  <img className="w-full object-cover" src={blog.image} />
                </div>
                <div className="mt-10" data-aos="fade-up">
                  <div
                    className="text-primary flex items-center text-sm"
                    data-aos="fade-up"
                  >
                    <i className="ri-time-line" />
                    <span className="ml-1">
                      {moment(blog.date).format("MMMM DD, YYYY")}
                    </span>
                  </div>
                  <h5 className="text-3xl font-medium" data-aos="fade-up">
                    {blog.title}
                  </h5>
                  <div
                    className="mt-8 text-sm text-secondary-100"
                    data-aos="fade-up"
                  >
                    {htmlParser(blog.content)}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 w-full lg:pl-6 pl-0 lg:mt-0 mt-10"
              data-aos="fade-left"
            >
              <div className="flex flex-wrap -mx-3">
                <div className="p-3 w-full">
                  <input
                    className="w-full border border-secondary-400 bg-transparent placeholder-secondary-300 px-4 py-2 outline-none"
                    placeholder="Search"
                    data-aos="fade-up"
                  />
                  <div className="mt-6 w-full">
                    {blogs.map((trend, index: number) => (
                      <div className="my-4" key={index} data-aos="fade-up">
                        <div className="opacity-80 hover:opacity-100 transition-all duration-100">
                          <Link
                            to={`/blogs/${slugify.combine(
                              trend.title,
                              trend.id
                            )}`}
                          >
                            <img
                              src={trend.image}
                              className="w-full h-24 object-cover"
                            />
                            <div className="mt-2">
                              <div className="text-primary flex items-center text-xs">
                                <i className="ri-time-line" />
                                <span className="ml-1">
                                  {moment(trend.date).format("MMMM DD, YYYY")}
                                </span>
                              </div>
                              <div className="text-sm">{trend.title}</div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {
        // End Section
      }
    </Fragment>
  );
};
