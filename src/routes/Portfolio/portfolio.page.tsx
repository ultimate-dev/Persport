import { Fragment, useState } from "react";
import Tilt from "react-parallax-tilt";
// Components
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";

export default () => {
  let [active, setActive] = useState("all");
  let [pagination, setPagination] = useState(1);
  const portfolio = {
    tags: [
      {
        name: "Javascript",
        tag: "js",
      },
      {
        name: "Node.js",
        tag: "nodejs",
      },
      {
        name: "PHP",
        tag: "php",
      },
      {
        name: "Java",
        tag: "java",
      },
      {
        name: "Python",
        tag: "python",
      },

      {
        name: "C#",
        tag: "csharp",
      },
      {
        name: "C",
        tag: "c",
      },
      {
        name: "Go",
        tag: "go",
      },
      {
        name: "Assembly",
        tag: "assembly",
      },
      {
        name: "HTML",
        tag: "html",
      },
      {
        name: "CSS",
        tag: "css",
      },
    ],
    works: [
      {
        image:
          "https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=409&q=80",
        head: "Lorem ipsum dolor",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        href: "",
        tags: [
          { name: "Javascript", tag: "js" },
          { name: "Node.js", tag: "nodejs" },
        ],
      },
      {
        image:
          "https://images.unsplash.com/photo-1561212024-cb9ad0c33195?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        head: "Lorem ipsum dolor",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        href: "",
        tags: [{ name: "PHP", tag: "php" }],
      },
      {
        image:
          "https://images.unsplash.com/photo-1554668082-50d9cd32f406?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        head: "Lorem ipsum dolor",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        href: "",
        tags: [{ name: "Java", tag: "java" }],
      },
      {
        image:
          "https://images.unsplash.com/photo-1557264322-b44d383a2906?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        head: "Lorem ipsum dolor",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        href: "",
        tags: [{ name: "Python", tag: "python" }],
      },
      {
        image:
          "https://images.unsplash.com/photo-1565638459249-c85cbb2faaa8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        head: "Lorem ipsum dolor",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        href: "",
        tags: [{ name: "C#", tag: "csharp" }],
      },
      {
        image:
          "https://images.unsplash.com/photo-1553949285-bdcb31ec5cba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        head: "Lorem ipsum dolor",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        href: "",
        tags: [{ name: "C++", tag: "c" }],
      },
      {
        image:
          "https://images.unsplash.com/photo-1551043077-b55224769403?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        head: "Lorem ipsum dolor",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        href: "",
        tags: [{ name: "GO", tag: "go" }],
      },
      {
        image:
          "https://images.unsplash.com/photo-1553949345-eb786bb3f7ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        head: "Lorem ipsum dolor",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        href: "",
        tags: [{ name: "Assembly", tag: "assembly" }],
      },
      {
        image:
          "https://images.unsplash.com/photo-1597423244036-ef5020e83f3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        head: "Lorem ipsum dolor",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        href: "",
        tags: [
          { name: "HTML", tag: "html" },
          { name: "CSS", tag: "css" },
        ],
      },
    ],
  };

  const worksFilter = (data: any[]) => {
    return data.filter((item) => {
      if (active !== "all")
        return item.tags.find((tag: any) => tag.tag == active);
      else return true;
    });
  };

  return (
    <Fragment>
      {
        // Start Header
      }
      <Header.Head title="My Portfolio" subTitle="Works" />
      {
        // End Header
        // Start Section
      }
      <section>
        <div className="container mx-auto py-10">
          <div
            className="flex flex-wrap justify-center mt-10 -mx-3"
            data-aos="fade-up"
          >
            <div
              className={
                "pointer m-2 py-1 px-3 text-sm" +
                (active == "all"
                  ? " bg-white text-secondary"
                  : " bg-secondary-400 hover:bg-primary")
              }
              onClick={() => setActive("all")}
            >
              All
            </div>
            {portfolio.tags.map((tag, index: number) => (
              <div
                className={
                  "pointer m-2 py-1 px-3 text-sm" +
                  (active == tag.tag
                    ? " bg-white text-secondary"
                    : " bg-secondary-400 hover:bg-primary")
                }
                key={index}
                onClick={() => {
                  setActive(tag.tag);
                  setPagination(1);
                }}
              >
                {tag.name}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap mt-10 -mx-3">
            {worksFilter(portfolio.works)
              .slice((pagination - 1) * 6, pagination * 6)
              .map((work, index: number) => (
                <a
                  className="relative p-3 lg:w-1/3 md:w-1/2 w-full"
                  key={index}
                  data-aos="fade-up"
                  href={work.href}
                  target="_blank"
                >
                  <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                    <img
                      src={work.image}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute w-full h-full left-0 top-0 flex items-center bg-secondary bg-opacity-50 opacity-0 hover:opacity-100">
                      <div className="p-10 w-full">
                        <h4 className="text-2xl font-medium">{work.head}</h4>
                        <p className="mt-4 text-sm text-secondary-100 text-justify">
                          {work.text}
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-0 bottom-0 flex flex-wrap p-2">
                      {work.tags.map((tag: any, index: number) => (
                        <div
                          className="bg-white text-secondary shadow-br text-xs font-medium py-1 px-2 m-2"
                          key={index}
                        >
                          {tag.name}
                        </div>
                      ))}
                    </div>
                  </Tilt>
                </a>
              ))}
          </div>
          <div className="mt-5" data-aos="fade-up">
            <Pagination
              count={Math.ceil(worksFilter(portfolio.works).length / 6)}
              value={pagination}
              onChange={setPagination}
            />
          </div>
        </div>
      </section>
      {
        // End Section
      }
    </Fragment>
  );
};
