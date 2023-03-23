import React, { useState } from "react";
import {  Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { links } from "../utils/Mylinks";

const NavLinks = ({open,setOpen}) => {

  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link) => {
        return (
          <div key={link.name} >
            <div className="px-3 text-left md:cursor-pointer group">
              <h1
                className="py-3 flex justify-between items-center md:pr-0 pr-5 group"
                onClick={() => {
                  heading !== link.name
                    ? setHeading(link.name)
                    : setHeading("");
                    setSubHeading("");

                }}
              >
                <Link to={link.linkUrl} className="hover:font-normal hover:text-slate-800">{link.name}</Link>

                <span className="text-xl md:hidden inline">
                  <ion-icon
                    name={`${
                      heading === link.name ? "chevron-up" : "chevron-down"
                    }`}
                  ></ion-icon>
                </span>
                <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                  <ion-icon name="chevron-down"></ion-icon>
                </span>
              </h1>

              {link.submenu && (
                <div>
                  <div className="absolute top-19 z-50 hidden group-hover:md:block hover:md:block">
                    <div className="py-3">
                      <div
                        className="w-4 h-4 left-3 absolute 
                      mt-1 bg-[#00205B] rotate-45"
                      ></div>
                    </div>
                    <div className="bg-[#00205B] p-4 ">
                      {link.sublinks.map((mysublinks) => (
                        <div key={link.sublinks}>
                          <h1 className="text-lg font-semibold">
                            {mysublinks.Head}
                          </h1>
                          {mysublinks.sublink.map((slink) => (
                            <li key={slink.name} className=" text-white  my-2.5">
                              <ScrollLink
                                to={slink.idd} spy={true} smooth={true}
                                ignoreCancelEvents
                                className=" hover:text-gray-500 ease-in tracking-wide"
                              >
                                {slink.name}
                              </ScrollLink>
                              <hr className="my-2"/>
                            </li>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menus */}

            <div
              className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
            >
              {/* sublinks */}

              {link.sublinks.map((slinks) => (
                <div key={slinks.Head}>
                  <div>
                    <h1
                      onClick={() =>
                        subHeading !== slinks.Head
                          ? setSubHeading(slinks.Head)
                          : setSubHeading("")
                          
                      }
                      className="hidden py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                    >
                      {slinks.Head}

                      <span className="text-xl md:mt-1 md:ml-2 inline">
                        <ion-icon
                          name={`${
                            subHeading === slinks.Head
                              ? "chevron-up"
                              : "chevron-down"
                          }`}
                        ></ion-icon>
                      </span>
                    </h1>
                    <div
                      className={`${
                        subHeading === slinks.Head ? "md:hidden" : "hidden"
                      }`}
                    >
                      {slinks.sublink.map((slink) => (
                        <li className="py-3 pl-14" key={slink.name}
                        >
                          <Link to={slink.link}
                          
                          >{slink.name}</Link>
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NavLinks;
