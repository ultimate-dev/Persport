import { Fragment, useState } from "react";
// Components
import Header from "../../components/Header";
import Button from "../../components/Button";

export default () => {
  let [name, setName] = useState("");
  let [surname, setSurname] = useState("");
  let [subject, setSubject] = useState("");
  let [message, setMessage] = useState("");

  const contact = {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    address: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    phone: "+90 555 555 55 55",
    email: "dottiejordon@gmail.com",
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
    <Fragment>
      {
        // Start Header
      }
      <Header.Head title="Get In Touch" subTitle="Contact" />
      {
        // End Header
        // Start Section
      }
      <section>
        <div className="container mx-auto py-10">
          <p className="w-full text-secondary-100 mt-10" data-aos="fade-up">
            {contact.text}
          </p>
          <div className="flex flex-wrap items-center">
            <div className="lg:w-1/3 w-full mt-10" data-aos="fade-up">
              <div className="flex text-sm items-center my-8">
                <i className="ri-road-map-fill text-secondary-50 text-4xl" />
                <div className="ml-4">
                  <div className="text-secondary-200 uppercase">Address</div>
                  <a className="text-sm">{contact.address}</a>
                </div>
              </div>
              <div className="flex text-sm items-center my-8">
                <i className="ri-mail-open-fill text-secondary-50 text-4xl" />
                <div className="ml-4">
                  <div className="text-secondary-200 uppercase">Email</div>
                  <a href={"tel:" + contact.email} className="text-sm">
                    {contact.email}
                  </a>
                </div>
              </div>
              <div className="flex text-sm items-center my-8">
                <i className="ri-phone-fill text-secondary-50 text-4xl" />
                <div className="ml-4">
                  <div className="text-secondary-200 uppercase">Phone</div>
                  <a href={"tel:" + contact.phone} className="text-sm">
                    {contact.phone}
                  </a>
                </div>
              </div>
              <div
                className="border-t border-secondary-400 my-8 py-4 flex justify-center items-center"
                data-aos="fade-up"
              >
                {contact.socials.map((social, index: number) => (
                  <a
                    key={index}
                    className="px-2 text-xl opacity-70 hover:opacity-100"
                    href={social.href}
                    target="_blank"
                  >
                    <i className={"ri-" + social.icon + "-fill"} />
                  </a>
                ))}
              </div>
            </div>
            <div
              className="lg:w-2/3 w-full lg:pl-6 pl-0 mt-10"
              data-aos="fade-left"
            >
              <div className="flex flex-wrap -mx-3 text-sm">
                <div className="w-1/2 p-3" data-aos="fade-up">
                  <input
                    className="bg-secondary-400 h-12 outline-none px-4 w-full placeholder-secondary-300"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="w-1/2 p-3" data-aos="fade-up">
                  <input
                    className="bg-secondary-400 h-12 outline-none px-4 w-full placeholder-secondary-300"
                    placeholder="Surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </div>
                <div className="w-full p-3" data-aos="fade-up">
                  <input
                    className="bg-secondary-400 h-12 outline-none px-4 w-full placeholder-secondary-300"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="w-full p-3" data-aos="fade-up">
                  <textarea
                    rows={3}
                    className="bg-secondary-400 outline-none p-4 w-full placeholder-secondary-300"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="w-full p-3 text-right" data-aos="fade-up">
                  <Button.Default icon="send-plane-2-fill">Send</Button.Default>
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
