import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Slider from "react-slick";
import Image from "next/image";
import profile from "../public/profile.png";
import design from "../public/design.png";
import Mailer from "./mail";

import Carousel from "@/components/carousel";
import CardCarousel from "@/components/cardcarousel";
import CardMap from "@/components/cardmap";
const Front = () => {
  const data = [
    {
      title: "Pac Man Game with Dungeons",
      content: "Technologies USed: Java, Junit",
      image: "/pacman.png",
    },
    {
      title: "Trending Stock Market WebSite",
      content: "Technologies USed: Javascript, React, Bootstrap, Express, Node",
      image: "/stockmarket.png",
    },

    {
      title: "Tuiter Website",
      content: "Technologies USed: Typescript, Javascript, React, Node",
      image: "/tuiter.png",
    },
    {
      title: "Weather Android App",
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
   image:"/software.png" },
    {
      title: "Cloud Computing Services:",
      description: `Designing and managing cloud-based solutions.
Working with platforms like AWS, Azure, and Google Cloud.
Implementing and managing cloud storage, computing, and various services.`,
image:"/cloudcomputing.png"
    },
    {
      title: "Technical Consulting:",
      description: `Providing expert advice on software development practices.
Helping businesses understand and implement technology solutions.
Conducting system analysis and recommending improvements.`,
image:"/consulting.png"
    },
    {
      title: "Machine Learning and Artificial Intelligence:",
      description: `Developing AI-driven applications.
Implementing machine learning models.
Analyzing data and creating predictive models.`,
image:"/machine.png"
    },
    {
      title: "Database Design and Management:",
      description: `Creating and managing databases.
Ensuring data integrity, performance, and security.
Implementing data storage solutions and writing efficient queries.`,
image:"/database.png"
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
        <AiFillGithub className="dark:fill-white transition-transform duration-300 hover:scale-150 cursor-pointer" />
        <AiFillLinkedin className="dark:fill-white transition-transform duration-300 hover:scale-150 cursor-pointer" />
        <AiFillYoutube className="dark:fill-white transition-transform duration-300 hover:scale-150 cursor-pointer" />
      </div>
      <div className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20  ">
        <div>
          <img
            src="/profile.png"
            className="rounded-full flex ml-0 mt-96 absolute bottom-0"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="text-gray-800 text-center my-16">
      <div className=" text-teal-600 dark:text-slate-300 text-2xl my-4 font-medium">
          Project Gallery:
        </div>
        <div className>
        <CardCarousel cardsData={data} />
        </div>
      </div>

      <div className="flex flex-col items-center text-center justify-center md:my-12 my-2">
        <div className=" text-teal-600 dark:text-slate-300 text-2xl font-medium">
          About Me
        </div>

        <div
          class="flex-col flex aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl  border-gray-300  p-1"
          style={{ width: "60%", height: "400px" , boxShadow: "20px 20px 20px -12px rgba(0, 0, 0, 0.5)"}}
        >
          <iframe
            class="flex-col w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/TqYa_kL0zHc"
            title="YouTube video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </div>

  

      <section className="text-teal-600 dark:text-slate-300 mt-10 ">
        <div className="text-center">
          <h3 className="text-2xl pt-2 font-medium">
            Engineering Solutions Offered:
          </h3>
        </div>
        <div className="lg:flex gap-10 text-gray-600">
          <CardMap data={cardData} />
        </div>
      </section>
    
      <section className=" mt-8  text-teal-600  m-2 dark:text-slate-300  text-center  md:text-xl text-base font-medium">
        Contact Me:
        <div className=" flex flex-col md:flex-row w-full my-4 text-gray-800 dark:text-slate-300">

          <div className="md:flex md:flex-grow md:w-4/12 text-center items-center justify-center border shadow-lg my-2 p-2 mr-2 rounded-lg ">
           <div className="flex-col">
           <div>
           Priyesh
           </div>
           <div>
           Northeastern University 
           </div>
           <div>
           +1(617)7519543
           </div>
           <div>
           17 Vancouver st. Boston
           </div>
           
            </div>
            
          </div>
          <div class="hidden md:block md:w-0.5 my-6 bg-teal-400 "></div> 
<div className="flex md:w-8/12 w-full m-2 p-2 shadow-lg border rounded-lg text-start " >
          <Mailer />
          </div>
        </div>
      </section>
    </>
  );
};

export default Front;
