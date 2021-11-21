import React from "react";
// Pages
const HomePage = React.lazy(() => import("../routes/Home/home.page"));
const AboutPage = React.lazy(() => import("../routes/About/about.page"));
const BlogsPage = React.lazy(() => import("../routes/Blog/blogs.page"));
const BlogPage = React.lazy(() => import("../routes/Blog/blog.page"));
const PortfolioPage = React.lazy(
  () => import("../routes/Portfolio/portfolio.page")
);
const ContactPage = React.lazy(() => import("../routes/Contact/contact.page"));

export default [
  {
    path: "/",
    render: HomePage,
    exact: true,
  },
  {
    path: "/about",
    render: AboutPage,
    exact: true,
  },
  {
    path: "/blogs",
    render: BlogsPage,
    exact: true,
  },
  {
    path: "/blogs/:slug",
    render: BlogPage,
    exact: true,
  },
  {
    path: "/portfolio",
    render: PortfolioPage,
    exact: true,
  },
  {
    path: "/contact",
    render: ContactPage,
    exact: true,
  },
];
