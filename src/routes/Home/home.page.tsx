import { Fragment } from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import moment from "moment";
// Components
import Header from "../../components/Header";
// Utils
import slugify from "../../utils/slugfiy";
import Button from "../../components/Button";

export default () => {
  const home = {
    services: [
      {
        title: "Brand Consultant",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Global Marketing",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "UI/UX Solutions",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
    blogs: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1502691876148-a84978e59af8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: new Date(),
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1495218128687-72d990041786?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
        title: "Ut enim ad minim veniam.",
        date: new Date(),
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1580566176138-daa588058b59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        title: "Duis aute irure dolor in reprehenderit in voluptate.",
        date: new Date(),
      },
    ],
    customers: [
      {
        href: "https://www.google.com",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png",
      },
      {
        href: "https://www.netflix.com",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
      },
      {
        href: "https://www.spotify.com",
        image:
          "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png",
      },
    ],
    text: "Mattis pellentesque id nibh tortor id aliquet lectus proin. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Et malesuada fames ac turpis egestas integer. Bibendum at varius vel pharetra vel turpis. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Odio facilisis mauris sit amet massa vitae. Varius morbi enim nunc faucibus. Ut tellus elementum sagittis vitae et leo duis. Amet justo donec enim diam vulputate ut. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Laoreet sit amet cursus sit amet dictum sit amet. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Tortor posuere ac ut consequat semper viverra. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Molestie ac feugiat sed lectus. Consectetur libero id faucibus nisl tincidunt.",
  };
  return (
    <Fragment>
      {
        // Start Header
      }
      <Header.Hero />
      {
        // End Header
        // Start Section
      }
      <div className="section py-10">
        {
          // Start Container
        }
        <div className="container mx-auto">
          <div className="py-6" data-aos="fade-up">
            <h4 className="text-secondary-300" data-aos="fade-up">
              Services
            </h4>
            <h2 className="text-3xl font-medium">What I Do</h2>
          </div>
          <div className="mt-3">
            {home.services.map((service, index: number) => (
              <div
                className="w-full my-3 border border-secondary-400 p-5 bg-secondary-600"
                key={index}
                data-aos="fade-up"
              >
                <h4 className="text-primary font-medium">{service.title}</h4>
                <p className="text-sm text-secondary-200">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
        {
          // End Container
        }
      </div>
      {
        // End Section
        // Start Section
      }
      <div className="section py-10 bg-secondary-600">
        {
          // Start Container
        }
        <div className="container mx-auto">
          <div className="py-6" data-aos="fade-up">
            <h4 className="text-secondary-300" data-aos="fade-up">
              Customers
            </h4>
            <h2 className="text-3xl font-medium">Happy People</h2>
          </div>
          <div className="flex flex-wrap justify-center -mx-3">
            {home.customers.map((customer, index: number) => (
              <div
                className="lg:w-1/3 md:w-1/2 w-full p-3"
                key={index}
                data-aos="fade-up"
              >
                <div className="transition-all duration-100 ease-linear transform hover:scale-95">
                  <a
                    href={customer.href}
                    className="block bg-secondary p-6 h-28"
                    data-aos="fade-up"
                    target="_blank"
                  >
                    <img
                      src={customer.image}
                      className="h-full w-full object-contain"
                      draggable={false}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {
          // End Container
        }
      </div>
      {
        // End Section
        // Start Section
      }
      <div className="section py-10">
        {
          // Start Container
        }
        <div className="container mx-auto">
          <div className="py-6" data-aos="fade-up">
            <h4 className="text-secondary-300" data-aos="fade-up">
              Most Popular
            </h4>
            <h2 className="text-3xl font-medium">News Posts</h2>
          </div>
          <div className="flex flex-wrap -mx-3">
            {home.blogs.map((blog, index: number) => (
              <div
                className="lg:w-1/3 w-full p-3"
                key={index}
                data-aos="fade-up"
              >
                <div className="opacity-90 hover:opacity-100 transition-all duration-100">
                  <Link to={`/blogs/${slugify.combine(blog.title, blog.id)}`}>
                    <img
                      src={blog.image}
                      className="w-full h-40 object-cover"
                    />
                    <div className="mt-2">
                      <div className="text-primary flex items-center text-xs">
                        <i className="ri-time-line" />
                        <span className="ml-1 font-medium">
                          {moment(blog.date).format("MMMM DD, YYYY")}
                        </span>
                      </div>
                      <div className="text-sm">{blog.title}</div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 text-center" data-aos="fade-up">
            <Link to="/blogs">
              <Button.Outline color="primary" textColor="white">
                Blogs
              </Button.Outline>
            </Link>
          </div>
        </div>
        {
          // End Container
        }
      </div>
      {
        // End Section
        // Start Section
      }
      <div className="section py-10 bg-primary-600">
        {
          // Start Container
        }
        <div className="container mx-auto">
          <div
            className="w-full border border-primary-400 pt-10 px-10 pb-5 text-center"
            data-aos="fade-up"
          >
            <h4 className="font-medium text-2xl">Lorem ipsum dolor sit amet</h4>
            <p className="text-primary-200 mt-5 text-sm">{home.text}</p>
            <div className="text-right mt-5" data-aos="fade-up">
              <Button.Outline
                color="white"
                textColor="primary"
                className="mr-5"
              >
                Decline
              </Button.Outline>
              <Button.Default color="white" textColor="primary">
                Accept
              </Button.Default>
            </div>
          </div>
        </div>
        {
          // End Container
        }
      </div>
      {
        // End Section
      }
    </Fragment>
  );
};
