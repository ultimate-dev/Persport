import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
// Actions
import { hideMenu, showMenu, showSearch } from "../store/actions";
// Components
import Logo from "../components/Logo";
import Button from "../components/Button";

/**
 * Props
 */
class NavbarProps {
  navs?: any[];
  menuVisible?: boolean;
  search?: boolean;
}

export default ({
  navs = [],
  menuVisible = false,
  search = false,
}: NavbarProps) => {
  let location = useLocation();
  let [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 20) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      });
    }
  }, []);

  useEffect(() => {
    hideMenu();
  }, [location.pathname]);

  return (
    <div
      className={
        "w-full h-16 fixed top-0 z-50 transition-all ease-linear duration-200" +
        (scroll ? " shadow bg-primary" : "") +
        (menuVisible ? " -left-60" : " -left-0")
      }
    >
      {
        // Start Container
      }
      <div className="relative container mx-auto flex justify-between items-center h-full">
        {
          // Start Logo
        }
        <Logo />
        {
          // End Logo
          // Start Menu
        }
        <div className="h-full lg:flex hidden">
          {navs.map((nav, key: number) => (
            <NavLink
              key={key}
              to={nav.to}
              exact={nav.exact}
              className="flex items-center px-6 uppercase opacity-80 hover:opacity-100 border-b-2 border-transparent transition-all ease-linear duration-200"
              activeClassName="opacity-100 border-white"
            >
              <span className="text-xs font-medium">{nav.name}</span>
            </NavLink>
          ))}
        </div>
        {
          // End Menu
          // Start Area
        }
        <div className="h-full flex justify-end items-center flex-1">
          {
            // Start Buy Now Button
          }
          <a target="_blank" href="">
            <Button.Default
              color="secondary"
              size="sm"
              className="whitespace-nowrap"
            >
              Buy Now
            </Button.Default>
          </a>
          {
            // End Buy Now Button
            // Start Search Button
          }
          <button className="p-4" onClick={showSearch}>
            <i className="ri-search-line text-2xl" />
          </button>
          {
            // End Search Button
            // Start Mobile Menu Button
          }
          <button
            className="py-4 lg:hidden"
            onClick={menuVisible ? hideMenu : showMenu}
          >
            <i className="ri-menu-line text-2xl" />
          </button>
          {
            // End Mobile Menu Button
          }
        </div>
        {
          // End Area
        }
      </div>
      {
        // End Container
        // Start Mobile Menu
      }
      <div className="absolute top-0 -right-60 w-60 h-screen bg-secondary-600 shadow flex flex-col items-center justify-center">
        {navs.map((nav, key: number) => (
          <NavLink
            key={key}
            to={nav.to}
            exact={nav.exact}
            className="w-full flex items-center px-10 py-4 uppercase transition-all ease-linear duration-200"
            activeClassName="opacity-100 bg-secondary"
          >
            <span className="text-sm font-medium">{nav.name}</span>
          </NavLink>
        ))}
      </div>
      {
        // End Mobile Menu
      }
    </div>
  );
};
