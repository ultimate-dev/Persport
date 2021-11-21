// Images
import LogoIMG from "../assets/images/logo_long.png";

export default () => {
  return (
    <div className="h-full py-3 flex-1">
      <img src={LogoIMG} className="h-full" draggable={false} />
    </div>
  );
};
