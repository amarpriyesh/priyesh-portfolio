import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Slider from "react-slick";
import Image from "next/image";
import profile from "../public/profile.png";
import design from "../public/design.png";
import Mailer from "./mail";

import Carousel from "@/components/carousel";
import CardCarousel from "@/components/cardcarousel";
import CardMap from "@/components/cardmap";
import Link from "next/link";
import Script from "next/script";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Front = () => {
  const darkMode = useSelector((state) => state.darkMode.value);

  useEffect(() => {
    // Load the script dynamically or initialize it here
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, [darkMode]);
  const data = [
    {
      title: "PAC Man with Dungeons Game",
      content: "Technologies USed: Java, Junit",
      image: "/pacman.png",
    },
    {
      title: "Trending Stock Market WebSite",
      content: "Technologies USed: Javascript, React, Bootstrap, Express, Node",
      image: "/stockmarket.png",
    },

    {
      title: "Tuiter Website (Twitter)",
      content: "Technologies USed: Typescript, Javascript, React, Node",
      image: "/tuiter.png",
    },
    {
      title: "Weather App",
      content: "Technologies USed: Java, Android",
      image: "/weatherapp.png",
    },
    {
      title: "Smart Savr wallet App",
      content: "Technologies USed:  Java, Android, kotlin",
      image: "/smartsavrchores.png",
    },

    {
      title: "Visulization BI tool",
      content: "Technologies USed: Python, TkInktr",
      image: "/visualization.png",
    },
  ];
  const cardData = [
    {
      title: "Software Development:",
      description: `Designing, coding, and testing software applications.
Developing web applications, mobile apps, desktop software, and more.
Writing clean, efficient, and well-documented code in various programming languages (e.g., Python, Java, JavaScript, C++, etc.).`,
      image: "/software.png",
    },
    {
      title: "Cloud Computing Services:",
      description: `Designing and managing cloud-based solutions.
Working with platforms like AWS, Azure, and Google Cloud.
Implementing and managing cloud storage, computing, and various services.`,
      image: "/cloudcomputing.png",
    },
    {
      title: "Technical Consulting:",
      description: `Providing expert advice on software development practices.
Helping businesses understand and implement technology solutions.
Conducting system analysis and recommending improvements.`,
      image: "/consulting.png",
    },
    {
      title: "Machine Learning and Artificial Intelligence:",
      description: `Developing AI-driven applications.
Implementing machine learning models.
Analyzing data and creating predictive models.`,
      image: "/machine.png",
    },
    {
      title: "Database Design and Management:",
      description: `Creating and managing databases.
Ensuring data integrity, performance, and security.
Implementing data storage solutions and writing efficient queries.`,
      image: "/database.png",
    },
  ];

  return (
    <>
      <div className="text-center pb-5 dark:text-slate-300">
        <h2 className="text-4xl py-2 text-teal-600 font-medium md:text-5xl lg:text-6xl">
          Priyesh
        </h2>
        <h3 className="text-2xl py-2 text-gray-800 dark:text-slate-300 font-semibold">
          Software Engineer and Infrastructure Expert
        </h3>
        <p className="text-md py-2 leadin-8 text-gray-800 max-w-xl mx-auto dark:text-slate-400">
          I am a passionate software engineer with over 4 years of experience,
          specializing in Java, Python, JavaScript, and React. My expertise
          encompasses working with microservices, RESTful APIs, testing, data
          structures, devops tools, and Agile methodologies.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16  text-gray-600 ">
        <a href="https://github.com/amarpriyesh" target="_blank">
          <AiFillGithub
            className="dark:fill-white transition-transform duration-300 hover:scale-150 cursor-pointer"
            alt="GitHub"
          />
        </a>
        <a href="https://www.linkedin.com/in/fnupriyesh/" target="_blank">
          <AiFillLinkedin className="dark:fill-white transition-transform duration-300 hover:scale-150 cursor-pointer" />
        </a>
        <a
          href="https://youtube.com/@priyesh926?si=QLsjDoB4yizy-zh1"
          target="_blank"
        >
          <AiFillYoutube className="dark:fill-white transition-transform duration-300 hover:scale-150 cursor-pointer" />
        </a>
      </div>
      <div className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20  ">
        <div>
          <img
            src="/profile.png"
            className="rounded-full flex ml-0 mt-96 mb-1 absolute bottom-0"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="text-gray-800 text-center mt-8 mb-8">
        <div className=" text-teal-600 dark:text-slate-300 md:text-3xl text-2xl my-2 font-medium">
          Project Gallery:
        </div>
        <p className="text-md  md:pb-4 leadin-8 text-gray-800 max-w-xl mx-auto dark:text-slate-400">
          Below are major projects I worked on, please click on the title to
          know more about specific projects. You can also go to{" "}
          <Link href="/projects" className="text-teal-600">
            <span>Projects</span>
          </Link>{" "}
          tab to view all projects.
        </p>
        <div className>
          <CardCarousel cardsData={data} />
        </div>
      </div>

      <div className="flex flex-col items-center text-center justify-center mt-8">
        <div className=" text-teal-600 dark:text-slate-300 md:text-3xl  text-2xl font-medium mb-2 md:mb-4">
          About Me
        </div>

        <div class="flex w-full sm:max-w-screen-md aspect-video rounded-lg shadow-2xl p-1 border">
          <iframe
            class=" w-full h-full rounded-lg "
            src="https://www.youtube.com/embed/IRYA-keUlvs"
            title="YouTube video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <section className="text-teal-600 dark:text-slate-300 mt-8 ">
        <div className="text-center">
          <h3 className="md:text-3xl  text-2xl pt-2 font-medium">
            Engineering Solutions Offered:
          </h3>
        </div>
        <div className="lg:flex gap-10 text-gray-600">
          <CardMap data={cardData} />
        </div>
      </section>

      
    </>
  );
};

export default Front;
