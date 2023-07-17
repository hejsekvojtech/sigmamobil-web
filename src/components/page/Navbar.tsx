import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../resources/sigmamobil-logo.png";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "../../data/Navigation";

function Navbar() {
  const [menuExpanded, setExpanded] = useState<boolean>(false);
  const myRef = useRef<any | null>(null);

  const handleClickOutside = (e: { target: any }) => {
    if (!myRef.current.contains(e.target)) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <>
      <header className="w-full bg-white px-4 shadow border-b-2 border-b-brand-main z-10">
        <div className="container justify-between md:flex">
          <div className="flex py-4 justify-between items-center">
            <a href="/">
              <img className="h-10" src={Logo} alt="Site Logo" />
            </a>
            <div
              className="cursor-pointer md:hidden text-brand-secondary"
              onClick={() => setExpanded(!menuExpanded)}
            >
              {!menuExpanded ? (
                <Bars3BottomRightIcon className="h-10" />
              ) : (
                <XMarkIcon className="h-10" />
              )}
            </div>
          </div>
          <nav className="hidden md:flex space-x-2 items-center">
            {navigation.map(
              (item) =>
                item.hidden === false && (
                  <NavLink
                    key={item.key}
                    to={item.href}
                    onClick={() => setExpanded(false)}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-brand-main bg-red-100"
                          : "text-brand-secondary"
                      } hover:text-brand-main p-2 rounded-md transition ease-in-out duration-500 uppercase text-lg`
                    }
                  >
                    {item.name}
                  </NavLink>
                )
            )}
          </nav>
        </div>
      </header>
      <nav
        ref={myRef}
        className={
          "md:hidden p-2 z-[5] flex flex-col space-y-2 transform duration-200 left-0 right-0 bg-white transition-all absolute shadow-lg rounded-b-md " +
          (menuExpanded ? "translate-y-0" : "-translate-y-full")
        }
      >
        {navigation.map(
          (item) =>
            item.hidden === false && (
              <NavLink
                key={item.key}
                to={item.href}
                onClick={() => setExpanded(false)}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-brand-main bg-red-100"
                      : "text-brand-secondary"
                  } hover:text-brand-mail p-3 rounded-md transition ease-in-out duration-500 uppercase text-lg`
                }
              >
                {item.name}
              </NavLink>
            )
        )}
      </nav>
      <div
        className={
          "absolute md:hidden z-[2] inset-0 bg-zinc-800/40 transition-opacity delay-75 " +
          (menuExpanded ? "opacity-100" : "opacity-0 hidden")
        }
      />
    </>
  );
}

export default Navbar;
