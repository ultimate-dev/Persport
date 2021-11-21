type sizes = "sm" | "md" | "lg";

class CustomProps {
  size?: sizes;
  children?: null | string | JSX.Element | JSX.Element[];
  icon?: string;
  className?: string;
  prefixClass?: string;
}

const Custom = ({
  size = "md",
  children = null,
  icon,
  className,
  prefixClass,
}: CustomProps) => {
  let button = {
    class: "",
    textClass: "",
    iconClass: "",
  };
  switch (size) {
    case "sm":
      button.class += " h-8 px-4";
      button.iconClass += " w-8 px-0";
      button.textClass += " text-xs font-medium";
      break;

    case "md":
      button.class += " h-12 px-6";
      button.iconClass += " w-12 px-0";
      button.textClass += " text-sm font-medium";
      break;

    case "lg":
      button.class += " h-14 px-8";
      button.iconClass += " w-14 px-0";
      button.textClass += " text-sm font-medium";
      break;
  }
  button.class += icon && !children ? button.iconClass : "";

  button.class += className ? " " + className : "";
  button.class += prefixClass;

  return (
    <button
      className={
        "inline-block transition-all duration-100 ease-linear transform focus:scale-95" +
        button.class
      }
    >
      <span
        className={
          "w-full flex items-center justify-center uppercase" + button.textClass
        }
      >
        {icon && <i className={"ri-" + icon} />}
        {icon && children && <span className="mr-3" />}
        {children}
      </span>
    </button>
  );
};

// Default
class DefaultProps extends CustomProps {
  color?: string;
  textColor?: string;
}

const Default = (props: DefaultProps) => {
  let { color="primary", textColor = "white" } = props;
  let prefixClass = ` shadow-br hover:shadow-2br bg-${color} text-${textColor}`;
  return <Custom {...props} prefixClass={prefixClass} />;
};

// Outline
class OutlineProps extends CustomProps {
  color?: string;
  textColor?: string;
}

const Outline = (props: OutlineProps) => {
  let { color = "white", textColor = "primary" } = props;
  let prefixClass = ` border border-${color} bg-transparent hover:bg-${color} text-${color} hover:text-${textColor}`;
  return <Custom {...props} prefixClass={prefixClass} />;
};

export default { Default, Outline };
