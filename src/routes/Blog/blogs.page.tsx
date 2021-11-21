import moment from "moment";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
// Components
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
// Utils
import slugify from "../../utils/slugfiy";

export default () => {
  let [pagination, setPagination] = useState(1);

  const blogs = [
    {
      id: 1,
      tag: "Backend Development",
      image:
        "https://images.unsplash.com/photo-1502691876148-a84978e59af8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: new Date(),
    },
    {
      id: 2,
      tag: "Frontend Development",
      image:
        "https://images.unsplash.com/photo-1495218128687-72d990041786?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",

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
    {
      id: 5,
      tag: "Mobile Programing",
      image:
        "https://images.unsplash.com/photo-1558244661-d248897f7bc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      title: "Sodales ut etiam sit amet.",
      date: new Date(),
    },
    {
      id: 6,
      tag: "Server-Client",
      image:
        "https://images.unsplash.com/photo-1579197806876-e6e8ce4faf96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1618&q=80",
      title: "Erat velit scelerisque in dictum non consectetur a.",
      date: new Date(),
    },
    {
      id: 7,
      tag: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1576502200916-3808e07386a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=865&q=80",
      title: "Vestibulum lectus mauris ultrices eros in.",
      date: new Date(),
    },
    {
      id: 8,
      tag: "Web Design",
      image:
        "https://images.unsplash.com/photo-1576502200272-341a4b8d5ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Vitae congue eu consequat ac felis. ",
      date: new Date(),
    },
  ];

  const trends = [
    {
      id: 1,
      tag: "Backend Development",
      image:
        "https://images.unsplash.com/photo-1579197806876-e6e8ce4faf96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1618&q=80",

      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: new Date(),
    },
    {
      id: 2,
      tag: "Frontend Development",
      image:
        "https://images.unsplash.com/photo-1576502200272-341a4b8d5ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Ut enim ad minim veniam.",
      date: new Date(),
    },
    {
      id: 3,
      tag: "Design Systems",
      image:
        "https://images.unsplash.com/photo-1579197806876-e6e8ce4faf96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1618&q=80",
      title: "Duis aute irure dolor in reprehenderit in voluptate.",
      date: new Date(),
    },
    {
      id: 4,
      tag: "Web Frameworks",
      image:
        "https://images.unsplash.com/photo-1558244661-d248897f7bc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      title: "Excepteur sint occaecat cupidatat non proident.",
      date: new Date(),
    },
  ];

  const tags = [
    "Backend Development",
    "Frontend Development",
    "Design Systems",
    "Web Frameworks",
    "Mobile Programing",
    "Server-Client",
    "UI/UX Design",
    "Web Design",
  ];

  const recents = [
    {
      id: 1,
      title: "Vitae congue eu consequat ac felis.",
    },
    {
      id: 2,
      title: "Vestibulum lectus mauris ultrices eros in.",
    },
    {
      id: 3,
      title: "Erat velit scelerisque in dictum non consectetur a.",
    },
    {
      id: 4,
      title: "Excepteur sint occaecat cupidatat non proident.",
    },
    {
      id: 5,
      title: "Duis aute irure dolor in reprehenderit in voluptate.",
    },
  ];

  return (
    <Fragment>
      {
        // Start Header
      }
      <Header.Head title="My Blog" subTitle="Posts" />
      {
        // End Header
        // Start Section
      }
      <section>
        <div className="container mx-auto py-10">
          <div className="flex flex-wrap">
            <div className="lg:w-3/4 w-full">
              <div className="flex flex-wrap mt-10 -mx-3">
                {blogs
                  .slice((pagination - 1) * 4, pagination * 4)
                  .map((blog, index: number) => (
                    <Link
                      className="relative p-3 w-full"
                      key={index}
                      data-aos="fade-up"
                      to={`/blogs/${slugify.combine(blog.title, blog.id)}`}
                    >
                      <Tilt
                        className="border border-secondary-400 p-3"
                        tiltMaxAngleX={5}
                        tiltMaxAngleY={5}
                      >
                        <img
                          src={blog.image}
                          className="w-full h-60 object-cover"
                        />
                        <div className="px-3 mt-3">
                          <div className="flex flex-wrap items-center justify-between">
                            <div className="text-primary flex items-center text-sm">
                              <i className="ri-time-line" />
                              <span className="ml-1">
                                {moment(blog.date).format("MMMM DD, YYYY")}
                              </span>
                            </div>
                            {blog.tag && (
                              <div className="bg-white text-xs font-medium text-secondary m-1 px-2 py-1">
                                {blog.tag}
                              </div>
                            )}
                          </div>
                          <div className="mt-1">{blog.title}</div>
                        </div>
                      </Tilt>
                    </Link>
                  ))}
              </div>
              <div className="mt-5" data-aos="fade-up">
                <Pagination
                  count={Math.ceil(blogs.length / 6)}
                  value={pagination}
                  onChange={setPagination}
                />
              </div>
            </div>
            <div
              className="lg:w-1/4 w-full lg:pl-6 pl-0 lg:mt-0 mt-10"
              data-aos="fade-left"
            >
              <div className="flex flex-wrap mt-10 -mx-3">
                <div className="p-3 w-full">
                  <input
                    className="w-full border border-secondary-400 bg-transparent placeholder-secondary-300 px-4 py-2 outline-none"
                    placeholder="Search"
                    data-aos="fade-up"
                  />
                  <div className="mt-6 w-full">
                    <h5
                      className="uppercase font-medium text-lg mb-6"
                      data-aos="fade-up"
                    >
                      Trending
                    </h5>
                    {trends.map((trend, index: number) => (
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
                  <div className="mt-6 w-full border-t border-secondary-400 pt-6">
                    <h5
                      className="uppercase font-medium text-lg mb-6"
                      data-aos="fade-up"
                    >
                      Tags Cloud
                    </h5>
                    <div className="flex flex-wrap">
                      {tags.map((tag, index: number) => (
                        <div
                          className="bg-white text-xs font-medium text-secondary hover:bg-primary-600 hover:text-white m-1 px-2 py-1 transition-all duration-100"
                          key={index}
                          data-aos="fade-up"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 w-full border-t border-secondary-400 pt-6">
                    <h5
                      className="uppercase font-medium text-lg mb-6"
                      data-aos="fade-up"
                    >
                      Recent Posts
                    </h5>
                    <div className="flex flex-wrap">
                      {recents.map((recent, index: number) => (
                        <Link
                          to={`/blogs/${slugify.combine(
                            recent.title,
                            recent.id
                          )}`}
                        >
                          <div
                            className="my-1 text-secondary-200 hover:text-secondary-50 transition-all duration-100"
                            key={index}
                            data-aos="fade-up"
                          >
                            {recent.title}
                          </div>
                        </Link>
                      ))}
                    </div>
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
