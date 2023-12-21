import Head from "next/head";
import { BsFillMoonStarsFill, BsX, BsDownload } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Front from "./front";
import { useState } from "react";
import { useSelector } from "react-redux";
import React, { useReducer } from "react";
import { darkModeReducer } from "./reducers";

const ExploreSlider = ({ isOpen, onClose }) => {
  const router = useRouter();

  // Function to determine if the link is active
  const isActive = (pathname) => router.pathname === pathname;
  return (
    <>
      <div className={` ${isOpen ? "overlay" : ""}`}></div>
      <div className={`slider-container  bg-teal-300 ${isOpen ? "open" : ""}`}>
        <div className={`slider-content  bg-teal-300 ${isOpen ? "open" : ""}`}>
          <div className="justify-between flex font-burtons p-3">
            <div className="text-lg  ">Links:</div>

            <div>
              <BsX onClick={onClose} className="h-7 w-7" />
            </div>
          </div>
          <ul className="justify-start">
            <li
              className={` ${
                isActive("/") ? "text-white dark:text-purple-400" : ""
              }`}
            >
              <Link href="/">Home {/* This is the clickable part */}</Link>
            </li>
            <li
              className={` ${
                isActive("/projects") ? "text-white dark:text-purple-400 " : ""
              }`}
            >
              <Link href="/projects">
                Projects {/* This is the clickable part */}
              </Link>
            </li>
            <li
              className={` ${
                isActive("/workexperience")
                  ? "text-white dark:text-purple-400"
                  : ""
              }`}
            >
              <Link href="/workexperience">Work Experience</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const Layout = ({ children, title = "Default Title" }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  // Function to determine if the link is active
  const isActive = (pathname) => router.pathname === pathname;

  const darkMode = useSelector((state) => state.darkMode.value);
  const sliderMode = useSelector((state) => state.slider.value);
  const [isSliderOpen, setSliderOpen] = useState(false);

  const handleButtonClick = () => {
    setSliderOpen(!isSliderOpen);
  };

  return (
    <div className={`${darkMode ? "dark" : ""} `}>
      <main className="bg-white  dark:bg-gray-900">
        <div className={` min-h-screen ${sliderMode ? "divide-x" : ""}`}>
          <div className="flex">
            <div className={` ${sliderMode ? "w-1/5" : "w-0"}`}>
              <ExploreSlider
                isOpen={sliderMode}
                onClose={() => dispatch({ type: "toggleSlider" })}
              />
            </div>

            <div
              className={`  ${sliderMode ? "w-4/5" : "w-full"}`}
              onClick={() => (sliderMode ? dispatch({ type: "toggleSlider" }) : "")}
            >
              <nav className="pt-5 p-5 flex justify-between font-burtons dark:text-white  bg-gradient-to-b from-teal-500 w-full">
                <div className="justify-start flex">
                  <h1 onClick={() => dispatch({ type: "toggleSlider" })}>More</h1>

                  <ul className="flex ps-10">
                    <li
                      className={`pl-10 ${
                        isActive("/") ? "text-white dark:text-purple-400" : ""
                      }`}
                    >
                      <Link href="/">
                        Home {/* This is the clickable part */}
                      </Link>
                    </li>
                    <li
                      className={`pl-10 ${
                        isActive("/projects")
                          ? "text-white dark:text-purple-400"
                          : ""
                      }`}
                    >
                      <Link href="/projects">
                        Projects {/* This is the clickable part */}
                      </Link>
                    </li>
                    <li
                      className={`pl-10 ${
                        isActive("/workexperience")
                          ? "text-white dark:text-purple-400"
                          : ""
                      }`}
                    >
                      <Link href="/workexperience">
                        Work Experience {/* This is the clickable part */}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="flex items-center">
                    <li>
                      <BsFillMoonStarsFill
                        className="cursor-pointer text-3xl dark:fill-white"
                        onClick={() => dispatch({ type: "toggleDark" })}
                      />
                    </li>
                    <li className="justify-between flex">
                      <a
                        href="/priyesh_resume.pdf"
                        download="Priyesh_Resume.pdf"
                        className="pl-10 flex"
                      >
                        <BsDownload className="flex text-xl mr-2" />
                        Resume
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="px-10 md:px-20 lg:px-40">{children}</div>

              {/* <div className="px-10 md:px-20 lg:px-40">
                <Front />
              </div> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
