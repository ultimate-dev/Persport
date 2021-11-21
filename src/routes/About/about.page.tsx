import { Fragment } from "react";
import Tilt from "react-parallax-tilt";
import AnimatedNumbers from "react-animated-numbers";
// Components
import Header from "../../components/Header";
import Button from "../../components/Button";

export default () => {
  const about = {
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=389&q=80",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    email: "dottiejordon@gmail.com",
    name: "Dottie Jordon",
    age: 21,
    from: "İstanbul/Turkey",

    cv: "",

    achievements: [
      {
        number: 10,
        text: "Years of Experience",
      },
      {
        number: 97,
        text: "Completed Projects",
      },
      {
        number: 81,
        text: "Happy Customers",
      },
      {
        number: 53,
        text: "Most awards Winner",
      },
    ],

    skills: [
      {
        name: "Javascript",
        value: 95,
      },
      {
        name: "HTML/CSS/SCSS",
        value: 88,
      },
      {
        name: "PHP",
        value: 75,
      },
      {
        name: "Go",
        value: 50,
      },
      {
        name: "Java",
        value: 75,
      },
      {
        name: "Python",
        value: 88,
      },
      {
        name: "C#",
        value: 75,
      },
      {
        name: "C/C++",
        value: 65,
      },
      {
        name: "Assembly",
        value: 60,
      },
    ],

    services: [
      {
        icon: "window",
        title: "Motion & Web Graphy",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      {
        icon: "palette",
        title: "Ui/Ux Consultancy",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      {
        icon: "rocket-2",
        title: "Branding & Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      {
        icon: "smartphone",
        title: "Mobile App Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      {
        icon: "pencil-ruler",
        title: "Responsive Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      {
        icon: "customer-service",
        title: "Customer Support",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
    ],
  };

  return (
    <Fragment>
      {
        // Start Header
      }
      <Header.Head title="About Me" subTitle="Resume" />
      {
        // End Header
        // Start Section
      }
      <section>
        <div className="container mx-auto py-10 flex flex-wrap">
          <div className="lg:w-1/3 w-full mt-10" data-aos="fade-up">
            <Tilt className="border border-secondary-400 p-4">
              <img width="100%" src={about.image} draggable />
            </Tilt>
          </div>
          <div className="lg:w-2/3 w-full lg:pl-14 mt-10" data-aos="fade-up">
            <div
              className="border-b border-secondary-400 py-6"
              data-aos="fade-up"
            >
              <h4
                className="text-xl font-medium text-primary uppercase"
                data-aos="fade-up"
              >
                Who am i?
              </h4>
              <h2 className="text-3xl font-medium">{about.subTitle}</h2>
              <div className="mt-6 text-secondary-300">
                <p>{about.text}</p>
              </div>
            </div>
            <div className="flex flex-wrap py-6 text-sm" data-aos="fade-up">
              <div className="w-1/2 my-2">
                <span>Name:</span>
                <span className="ml-3 text-secondary-200">{about.name}</span>
              </div>
              <div className="w-1/2 my-2">
                <span>Email:</span>
                <a
                  href={"mailto:" + about.email}
                  className="ml-3 text-secondary-200"
                >
                  {about.email}
                </a>
              </div>
              <div className="w-1/2 my-2">
                <span>Age:</span>
                <span className="ml-3 text-secondary-200">{about.age}</span>
              </div>
              <div className="w-1/2 my-2">
                <span>From:</span>
                <span className="ml-3 text-secondary-200">{about.from}</span>
              </div>

              <div className="w-full mt-10">
                <a href={about.cv} download>
                  <Button.Default icon="download-line">
                    Download CV
                  </Button.Default>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap mt-10 -mx-3" data-aos="fade-up">
            {about.achievements.map((achievement, index: number) => (
              <div
                className="p-3 lg:w-1/4 md:w-1/2 w-full text-center"
                key={index}
                data-aos="fade-up"
              >
                <div className="border border-secondary-400 p-5">
                  <h1 className="text-4xl font-bold text-secondary-100 mb-2 flex justify-center">
                    <AnimatedNumbers
                      includeComma
                      animateToNumber={achievement.number}
                      fontStyle={{ fontSize: 40 }}
                      configs={[
                        { mass: 1, tension: 220, friction: 100 },
                        { mass: 1, tension: 180, friction: 130 },
                        { mass: 1, tension: 280, friction: 90 },
                        { mass: 1, tension: 180, friction: 135 },
                        { mass: 1, tension: 260, friction: 100 },
                        { mass: 1, tension: 210, friction: 180 },
                      ]}
                    />
                    +
                  </h1>
                  <div className="text-secondary-200">{achievement.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {
        // End Section
        // Start Section
      }
      <section>
        <div className="container mx-auto py-10">
          <h4 className="text-secondary-300" data-aos="fade-up">
            You Can Imagine I Can Do
          </h4>
          <h2 className="font-bold text-3xl" data-aos="fade-up">
            My Skills
          </h2>
          <div className="flex flex-wrap mt-10 -mx-3">
            {about.skills.map((skill, index: number) => (
              <div
                className="p-3 lg:w-1/3 md:w-1/2 w-full"
                key={index}
                data-aos="fade-up"
              >
                <span>
                  {skill.name}
                  <span className="ml-2 text-secondary-400 text-xs">
                    {skill.value}%
                  </span>
                </span>
                <div className="bg-secondary-400 w-full mt-1 p-1.5">
                  <div
                    className="bg-primary text-xs p-1.5"
                    style={{ width: skill.value + "%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {
        // End Section
        // Start Section
      }
      <section>
        <div className="container mx-auto py-10">
          <h4 className="text-secondary-300" data-aos="fade-up">
            Services i offer to my clients
          </h4>
          <h2 className="font-bold text-3xl" data-aos="fade-up">
            My Services
          </h2>
          <div className="flex flex-wrap mt-10 -mx-3">
            {about.services.map((service, index: number) => (
              <div
                className="p-3 lg:w-1/3 md:w-1/2 w-full"
                key={index}
                data-aos="fade-up"
              >
                <div className="bg-secondary-400 p-8 shadow-2br">
                  <i
                    className={
                      "ri-" + service.icon + "-fill text-6xl text-secondary"
                    }
                  />
                  <h2 className="text-xl mt-3">{service.title}</h2>
                  <p className="text-sm text-secondary-200 mt-2">
                    {service.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {
        // End Section
      }
    </Fragment>
  );
};
