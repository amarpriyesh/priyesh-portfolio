import Head from "next/head";
import { BsFillMoonStarsFill, BsMoonStars, BsX, BsDownload, BsCode, BsWindowDesktop, BsHouse, BsList} from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Front from "./front";
import { useState } from "react";
import { useSelector } from "react-redux";
import React, { useReducer } from "react";
import { darkModeReducer } from "../components/reducers";
import TwinklingBackground from "@/components/stars";

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
          <ul className=" flex flex-col justify-start p-3 gap-3">
            <li
              className={` ${
                isActive("/") ? "text-white dark:text-purple-400" : ""
              } `}
            >
            
              <Link href="/" className="flex text-2xl"> <BsHouse className=" text-3xl mr-2"/> <span className="hidden md:block">Home</span>  {/* This is the clickable part */}</Link>
            </li>
            <li
              className={` ${
                isActive("/projects") ? "text-white dark:text-purple-400 " : ""
              }`}
            >
              <Link href="/projects" className="flex text-2xl"> <BsCode className=" text-3xl mr-2"/> <span className="hidden md:block">Projects</span>  {/* This is the clickable part */}</Link>

            </li>
            <li
              className={` ${
                isActive("/workexperience")
                  ? "text-white dark:text-purple-400"
                  : ""
              }`}
            >
            <Link href="/workexperience" className="flex text-2xl"> <BsWindowDesktop className=" text-3xl mr-2"/> <span className="hidden md:block">Work Experience</span>  {/* This is the clickable part */}</Link>

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
      <main className="bg-transparent  dark:bg-gray-900">
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
              onClick={() =>
                sliderMode ? dispatch({ type: "toggleSlider" }) : ""
              }
            >


       
    
         
              <nav className="pt-5 p-5 flex justify-between font-burtons dark:text-white  bg-gradient-to-b from-teal-500 w-full">
                <div className="justify-start flex">
                  <h1 onClick={() => dispatch({ type: "toggleSlider" })} className="items-center flex-col flex hover:cursor-pointer">
                  <BsList className=" block text-3xl hover:scale-125 "/>
                  <span className="md:block hidden"> More </span> {/* This is the clickable part */}
                      
                  </h1>

                  <ul className="flex p3-3 md:ps-10">
                    <li
                      className={`pl-3 md:pl-10 ${
                        isActive("/") ? "text-white dark:text-purple-400" : ""
                      } `}
                    >
                      <Link href="/" className="items-center flex-col flex">
                      <BsHouse className=" block text-3xl hover:scale-125 "/>
                      <span className="md:block hidden"> Home </span> {/* This is the clickable part */}
                   
                      </Link>
                    </li>
                    <li
                      className={`pl-3 md:pl-10 ${
                        isActive("/projects")
                          ? "text-white dark:text-purple-400"
                          : ""
                      }`}
                    >
                      <Link href="/projects" className="items-center flex-col flex">
                      <BsCode className=" block text-3xl  hover:scale-125"/>
                      <span className="md:block hidden"> Projects </span> {/* This is the clickable part */}
                      
                      </Link>
                    </li>
                    <li
                      className={`pl-3 md:pl-10 ${
                        isActive("/workexperience")
                          ? "text-white dark:text-purple-400"
                          : ""
                      } `}
                    >
                      <Link href="/workexperience" className="items-center flex-col flex">
                      <BsWindowDesktop className=" block text-3xl hover:scale-125 "/>
                      <span className="md:block hidden"> Work Experience </span> {/* This is the clickable part */}
                      
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="flex items-center">
                    <li className="flex-col items-center flex">
                      <BsMoonStars
                        className="cursor-pointer text-3xl dark:fill-white hover:scale-125"
                        onClick={() => dispatch({ type: "toggleDark" })}
                        
                      />
                      <span className="hidden md:block">Dark Mode</span>
                    </li>
                    <li className="justify-between flex">
                      <a
                        href="/priyesh_resume.pdf"
                        download="Priyesh_Resume.pdf"
                        className="pl-3 md:pl-10 flex flex-col items-center"
                      >
                        <BsDownload className="flex text-3xl mr-2 hover:scale-125" />
                        <span className="hidden md:block">Resume</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="px-10 md:px-20 lg:px-40">
              {/* {darkMode ? 
              <TwinklingBackground children={children}/> : children} */}
              
              {children}
              </div>

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
