import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import NavLinks from "./NavLinks";

const NewNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className=" flex items-center font-medium justify-around border-b-[#800000] border-2">
        <div className="z-60 p-3 md:px-0 md:py-2 md:w-auto w-full flex justify-between items-center">
          <Link to={"/"}>
            <img
              src={Logo}
              alt="logo"
              className="md:cursor-pointer h-[25%] md:h-full w-full"
            />
          </Link>
          <div
            className="text-3xl m-3 md:hidden "
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>

        <div className="w-[20vw] md:block hidden">
          <input
            placeholder="Search"
            className="w-full outline-none border-2 rounded-3xl py-2 pl-4 text-base border-[#800000]"
          />
        </div>

        <div className="md:block hidden">
          <button
            style={{
              background: "#800000",
              boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.25)",
              backdropFilter: "blur(2px)",
              borderRadius: "10px",
              color: "white",
              minWidth: "10rem",
              minHeight: "5vh",
              marginLeft: "15%",
            }}
          >
            <Link
              to="/muhs-mandate"
              className="hover:text-white hover:font-semibold"
            >
              MUHS update
            </Link>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <ul className=" md:flex hidden font-fam items-center gap-8">
          <li>
            <Link
              to="/"
              className=" px-3 inline-block hover:text-black hover:font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            {/*<Link
              to="/about"
              className=" px-3 inline-block hover:text-black hover:font-medium"
            >
              About
          </Link>*/}
          </li>
          <NavLinks open={open} setOpen={setOpen} />
        </ul>
      </div>

      {/* Mobile nav */}
      <div
        className={`z-50 md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-2 pl-4
      duration-500 ${open ? "left-0" : "left-[-100%]"}`}
      >
        <section
          className="text-3xl flex items-center justify-end h-[11vh] pr-2 md:hidden "
          onClick={() => setOpen(!open)}
        >
          <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
        </section>
        <ul className={` `}>
          <li>
            <Link
              to="/"
              className="py-3 px-3 inline-block"
              onClick={() => setOpen(!open)}
            >
              Home
            </Link>
          </li>

          {/*<li>
            <Link
              to="/about"
              className="py-3 px-3 inline-block"
              onClick={() => setOpen(!open)}
            >
              About
            </Link>
        </li>*/}

          <NavLinks />
          <div className="py-3">
            <button
              style={{
                background: "#800000",
                boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.25)",
                backdropFilter: "blur(2px)",
                borderRadius: "10px",
                color: "white",
                minWidth: "10rem",
                minHeight: "5vh",
              }}
            >
              <Link
                to="/muhs-mandate"
                onClick={() => setOpen(!open)}
                className="hover:text-white hover:font-semibold"
              >
                MUHS update
              </Link>
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NewNavbar;
