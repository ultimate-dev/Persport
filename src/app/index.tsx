import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import AOS from "aos";
import useApp from "../hooks/useApp";
// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Search from "../components/Search";
// Source
import pages from "./pages";
import navs from "./navs";

/**
 * AOS Generate
 */
const generateAOS = () => {
  AOS.init({
    offset: 80,
    duration: 1000,
    easing: "ease",
    once: true,
  });
  AOS.refresh();
};

/**
 * App
 */
function App() {
  useApp();
  let app = useSelector((state: any) => state.appReducer);

  useEffect(() => {
    generateAOS();
  }, []);

  return (
    <main className="relative">
      {
        // Start Navbar
      }
      <Navbar navs={navs} {...app} />
      {
        // End Navbar
        // Start Pages
      }
      <div
        className={
          "relative transition-all ease-linear duration-200" +
          (app.menuVisible ? " -left-60" : " -left-0")
        }
      >
        <Switch>
          {pages.map((page, key: number) => (
            <Route
              key={key}
              path={page.path}
              render={(props: any) => <page.render {...props} />}
              exact={page.exact}
            />
          ))}
        </Switch>
        <Search />
      </div>
      {
        // End Pages
        // Start Footer
      }
      <Footer />
      {
        // End Footer
      }
    </main>
  );
}
export default App;
