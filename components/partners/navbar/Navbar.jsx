"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "@/common/Button";
import { AiOutlineDown } from "react-icons/ai";
import NavDropDown from "@/common/NavDropDown";
import { CommunityItems, categoryItems, featureItems } from "./navdata";

export default function Navbar() {
  const [isFeatureOpen, setIsFeatureOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const featureMenuHandler = () => {
    setIsCommunityOpen(false);
    setIsFeatureOpen(!isFeatureOpen);
    setIsResourcesOpen(false);
  };

  const communityMenuHandler = () => {
    setIsCommunityOpen(!isCommunityOpen);
    setIsFeatureOpen(false);
    setIsResourcesOpen(false);
  };

  const resourcesMenuHandler = () => {
    setIsCommunityOpen(false);
    setIsFeatureOpen(false);
    setIsResourcesOpen(!isResourcesOpen);
  };

  return (
    <nav className="bg-deepBlue px-1 py-5 fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl ml-4">
          <Link href="/">Framer</Link>
        </div>
        <ul className="max-lg:hidden lg:flex items-center space-x-10 font-semibold">
          <li className="text-gray-400 transition-all  relative cursor-pointer">
            <div
              className={`group flex items-center gap-1 hover:text-white`}
              onMouseEnter={featureMenuHandler}
            >
              Features{" "}
              <AiOutlineDown
                size={12}
                className="transform group-hover:rotate-180 duration-300"
              />
            </div>

            <NavDropDown isOpen={isFeatureOpen} items={featureItems} />
          </li>

          <li className="text-gray-400 transition-all cursor-pointer relative">
            <div
              className={`group flex items-center gap-1 hover:text-white`}
              onMouseEnter={resourcesMenuHandler}
            >
              Resources{" "}
              <AiOutlineDown
                size={12}
                className="transform group-hover:rotate-180 duration-300"
              />
            </div>

            <NavDropDown isOpen={isResourcesOpen} items={categoryItems} />
          </li>
          <li className="text-gray-400 transition-all cursor-pointer relative">
            <div
              className={`group flex items-center gap-1 hover:text-white`}
              onMouseEnter={communityMenuHandler}
            >
              Community{" "}
              <AiOutlineDown
                size={12}
                className="transform group-hover:rotate-180 duration-300"
              />
            </div>

            <NavDropDown isOpen={isCommunityOpen} items={CommunityItems} />
          </li>
          <li className="text-gray-400 hover:text-white transition-all">
            <Link href="/Customers">Customers</Link>
          </li>
          <li className="text-gray-400 hover:text-white transition-all">
            <Link href="/Enterprise">Contact</Link>
          </li>
          <li className="text-gray-400 hover:text-white transition-all">
            <Link href="/contact">Enterprise</Link>
          </li>
        </ul>

        {/* Mobile Menu */}

        <ul
          className={`${
            isMobileMenuOpen ? "translate-y-[0%] " : "-translate-y-[120%]"
          } transform  transition-transform duration-200 top-20 lg:hidden flex flex-col items-start font-semibold fixed z-30 left-0 bg-deepBlue w-full h-[calc(100%-80px)] pb-6 overflow-y-scroll`}
        >
          <li className="text-gray-400 cursor-pointer">
            <div className={`group flex items-center mx-3 p-2 text-xl`}>
              Features
            </div>
            <div className="my-4">
              {featureItems?.map((item) => (
                <div
                  key={item.id}
                  className=" flex items-center rounded-xl p-2 cursor-pointer"
                >
                  <div className={`text-[20px] mx-3 group-hover:text-white`}>
                    {item.icon}
                  </div>
                  <p className="text-white text-sm">{item.title}</p>
                </div>
              ))}
            </div>
          </li>

          <li className="text-gray-400 cursor-pointer">
            <div className={`group flex items-center mx-3 p-2 text-xl`}>
              Resources
            </div>
            <div className="my-4">
              {categoryItems?.map((item) => (
                <div
                  key={item.id}
                  className=" flex items-center rounded-xl p-2 cursor-pointer"
                >
                  <div className={`text-[20px] mx-3 group-hover:text-white`}>
                    {item.icon}
                  </div>
                  <p className="text-white text-sm">{item.title}</p>
                </div>
              ))}
            </div>
          </li>

          <li className="text-gray-400 cursor-pointer">
            <div className={`group flex items-center mx-3 p-2 text-xl`}>
              Community
            </div>
            <div className="my-4">
              {CommunityItems?.map((item) => (
                <div
                  key={item.id}
                  className=" flex items-center rounded-xl p-2 cursor-pointer"
                >
                  <div className={`text-[20px] mx-3 group-hover:text-white`}>
                    {item.icon}
                  </div>
                  <p className="text-white text-sm">{item.title}</p>
                </div>
              ))}
            </div>
          </li>

          <li className="text-gray-400 hover:text-white transition-all text-xl mb-4 ml-3 pl-2">
            <Link href="/Customers">Customers</Link>
          </li>
          <li className="text-gray-400 hover:text-white transition-all text-xl mb-4 ml-3 pl-2">
            <Link href="/Enterprise">Contact</Link>
          </li>
          <li className="text-gray-400 hover:text-white transition-all text-xl ml-3 pl-2">
            <Link href="/contact">Enterprise</Link>
          </li>
        </ul>
        <div className="flex gap-3 justify-center items-center mr-3">
          {!isMobileMenuOpen && (
            <>
              {" "}
              <Link
                className="text-gray-400 hover:text-white font-semibold"
                href="/signup"
              >
                Log in
              </Link>
              <Button
                styles={`px-2 py-1 rounded-lg font-semibold bg-gradient-to-r from-sky-400  to-sky-500`}
                title={`Sign up`}
                handleClick={() => {}}
              />{" "}
            </>
          )}
          <div className="lg:hidden flex items-center">
            {!isMobileMenuOpen ? (
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-neutral-600 p-2 "
              >
                <FaBars className="text-2xl" />
              </button>
            ) : (
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-neutral-600 p-2"
              >
                <FaTimes className="text-2xl" />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
