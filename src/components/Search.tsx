import { useSelector } from "react-redux";
// Actions
import { hideSearch } from "../store/actions";
// Components
import Button from "./Button";

export default () => {
  let search = useSelector((state: any) => state.appReducer.search);

  const results = [
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://wp.quomodosoft.com/growth/home-2/wp-content/uploads/sites/2/2019/05/post-2.jpg",
    },
  ];

  if (search)
    return (
      <div
        data-aos="fade-left"
        className="fixed left-0 top-0 w-full h-full bg-secondary z-50"
      >
        <div
          className="z-50 absolute right-0 top-0 text-4xl p-5 opacity-70 hover:opacity-100 transition-all ease-out duration-100"
          onClick={hideSearch}
        >
          <i className="ri-close-fill" />
        </div>
        <div className="flex flex-col w-full h-full pt-28 p-10">
          <div className="flex" data-aos="fade-up">
            <input
              className="w-full h-12 bg-secondary-400 outline-none px-4 placeholder-secondary text-center"
              placeholder="Search"
            />
            <Button.Default className="ml-4" icon="search-line" />
          </div>
          <div className="p-6 text-sm flex-1 flex flex-col" data-aos="fade-up">
            {results.map((result) => (
              <a className="w-full my-3 opacity-70 hover:opacity-100 transition-all ease-out duration-100 flex items-center">
                <img src={result.image} className="w-32 h-16" />
                <div className="ml-4">{result.title}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  else return null;
};
