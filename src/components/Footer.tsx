export default () => {
  const footer = {
    name: "Dottie Jordon",
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
    <div className="mt-10">
      <div className="container mx-auto flex flex-wrap justify-between items-center border-top">
        <div className="py-4 flex flex-wrap items-end">
          <span>{footer.name}</span>
          <a
            href={"mailto:" + footer.email}
            className="ml-3 text-secondary-400 text-xs"
          >
            {footer.email}
          </a>
          <a
            href={"tel:" + footer.phone}
            className="ml-3 text-secondary-400 text-xs"
          >
            {footer.phone}
          </a>
        </div>
        <div className="py-4 flex items-center">
          {footer.socials.map((social, index: number) => (
            <a
              key={index}
              className="px-2 text-lg opacity-70 hover:opacity-100"
              href={social.href}
              target="_blank"
            >
              <i className={"ri-" + social.icon + "-fill"} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
