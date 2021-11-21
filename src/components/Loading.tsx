import { SphereSpinner } from "react-spinners-kit";

const Fallback = () => {
  return (
    <div className="fixed left-0 top-0 w-full h-full bg-primary flex items-center justify-center">
      <SphereSpinner color="#FFFFFF" />
    </div>
  );
};

export default { Fallback };
