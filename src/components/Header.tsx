import { Fragment } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
// Componenets
import Button from "./Button";

/**
 * Hero
 */
class HeroProps {}
const Hero = ({}: HeroProps) => {
  const hero = {
    title: "ENGINEER",
    name: "Dottie Jordon",
    jobs: ["SOFTWARE ENGINEER", "GRAPHIC DESIGNER"],
    socials: [
      {
        icon: "twitter",
        href: "https://twitter.com",
      },
      {
        icon: "youtube",
        href: "https://www.youtube.com",
      },
      {
        icon: "instagram",
        href: "https://www.instagram.com",
      },
      {
        icon: "linkedin",
        href: "https://www.linkedin.com",
      },
      {
        icon: "github",
        href: "https://github.com",
      },
      {
        icon: "medium",
        href: "https://medium.com",
      },
    ],
  };
  return (
    <div className="relative w-full lg:h-screen bg-primary overflow-hidden pt-32 lg:pt-16">
      {
        // Start Back Text
      }
      <div className="back-text text-stroke-lg opacity-20">{hero.title}</div>
      {
        // Start Container
      }
      <div className="relative container mx-auto flex flex-wrap justify-between h-full">
        {
          // Start Content
        }
        <div
          className="w-full flex flex-col justify-center lg:items-start items-center lg:py-0 pb-32"
          data-aos="fade-right"
        >
          {
            // Start Head
          }
          <div className="uppercase lg:text-5xl text-3xl font-bold lg:my-2 my-1 text-center">
            <span>HI. I AM</span>
            <span className="ml-3 text-stroke">{hero.name}</span>
          </div>
          {
            // End Head
            // Start Head
          }
          <div className="uppercase lg:text-5xl text-3xl font-bold lg:my-2 my-1">
            <span>
              <Typewriter
                options={{
                  strings: hero.jobs,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          {
            // End Head
            // Start Buttons
          }
          <div className="mt-8 flex items-center">
            <Link to="/portfolio">
              <Button.Outline color="white" className="mr-3">
                My Portfolio
              </Button.Outline>
            </Link>
            <Link to="/contact">
              <Button.Default
                icon="mail-open-fill"
                color="secondary"
                className="mr-3"
              />
            </Link>
          </div>
          {
            // End Buttons
          }
        </div>
        {
          // End Content
          // Start Socials
        }
        <div
          className="absolute left-0 bottom-0 p-5 w-full flex justify-start"
          data-aos="fade-up"
        >
          {hero.socials.map((social, index: number) => (
            <a
              className="p-2 text-lg opacity-70 hover:opacity-100"
              href={social.href}
              target="_blank"
              key={index}
            >
              <i className={"ri-" + social.icon + "-fill"} />
            </a>
          ))}
        </div>
        {
          // End Socials
        }
      </div>
      {
        // End Container
      }
    </div>
  );
};

/**
 * Head
 */
class HeadProps {
  title?: string;
  subTitle?: string;
}
const Head = ({ title = "", subTitle = "" }: HeadProps) => {
  return (
    <div className="relative w-full pt-16 bg-primary">
      <div className="relative container mx-auto text-center py-16 uppercase">
        <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
          <h1
            className="text-6xl font-bold opacity-30 text-stroke sm:text-8xl"
            data-aos="fade-right"
          >
            {subTitle}
          </h1>
        </div>
        <h5 className="text-3xl sm:text-4xl font-bold" data-aos="fade-left">
          {title}
        </h5>
      </div>
      <div className="bg-primary-400 h-10" />
    </div>
  );
};

/**
 * Breadcrumb
 */
class BreadcrumbProps {
  title?: string;
  breadcrumbs?: { to: string; name: string }[];
}
const Breadcrumb = ({ title, breadcrumbs = [] }: BreadcrumbProps) => {
  return (
    <div className="relative w-full pt-16 bg-primary">
      <div className="bg-secondary-600 py-5">
        <div className="container mx-auto">
          <div
            className="flex flex-wrap items-center text-sm"
            data-aos="fade-right"
          >
            {breadcrumbs.map((breadcrumb, index: number) => (
              <Fragment key={index}>
                <Link
                  to={breadcrumb.to}
                  className="opacity-80 hover:opacity-100"
                >
                  {breadcrumb.name}
                </Link>
                <i className="ri-arrow-right-s-line mx-2 text-secondary-400" />
              </Fragment>
            ))}

            <Link to="#" className="opacity-80  hover:opacity-100 text-primary">
              {title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default { Hero, Head, Breadcrumb };
