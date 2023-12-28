import Layout from "./layout";
import React, { useState, useEffect } from 'react';

const Projects = () => {
    const [filter, setFilter] = useState({})
    
    let mapFilter = {}




   
  const returnBullets = (text) => {
    const arr = text.split("\n");
    return (
      <div>
        {" "}
        <ul className="list-disc dark:text-gray-400">
          {arr.map((a, key) => (
            <li key={key}> {a}</li>
          ))}
        </ul>{" "}
      </div>
    );
  };

  const returnTechnology = (text) => {
    const arr = text.split(",");
    return (
      <div className="flex flex-wrap gap-1 my-1">
    
        
          {arr.map((a, key) => (
            <div key={key} className=" bg-teal-300 rounded-lg px-2 text-xs drop-shadow-2xl dark:border-slate-300 border-gray-400 border shadow-black"> {a}</div>
          ))}
        
      </div>
    );
  };
  const list = [
    {
        date: "Dec 2023",
        company: "Northeastern University",
        title: "Portfolio",
        git: [],
        technology: "JavaScript, React, Next.js, Node, HTML, CSS, Tailwind, JWT tokens, SSL/TLS cert, git, linux, keyframes",
        youtube: "/portfolio.png",
        content: `Architected and developed a full-stack stock market trend analysis platform using the MERN stack, integrating real-time financial data display with interactive features such as commenting, liking, and viewing posts, leveraging technologies like MongoDB, Express.js, React.js, Node.js, and Bootstrap for a responsive design.
Implemented advanced web functionalities including JWT-based state and session management, Redis caching for optimized data retrieval, OAuth for secure third-party authentication, and data encryption, ensuring a secure and seamless end-user experience with efficient load times and robust security protocols.`,
      },

    {
        date: "May 2022",
        company: "Northeastern University",
        title: "Trending Stock Market WebSite",
        git: ["https://github.com/amarpriyesh/final-project-tuiter-node", "https://github.com/amarpriyesh/final-project-tuiter-react"],
        technology: "JavaScript, React, Express, Axios, MongoDB, Node, MERN, HTML, CSS, Bootstrap, JWT tokens, Redis, git, linux",
        youtube: "/stockmarket.png",
        content: `Architected and developed a full-stack stock market trend analysis platform using the MERN stack, integrating real-time financial data display with interactive features such as commenting, liking, and viewing posts, leveraging technologies like MongoDB, Express.js, React.js, Node.js, and Bootstrap for a responsive design.
Implemented advanced web functionalities including JWT-based state and session management, Redis caching for optimized data retrieval, OAuth for secure third-party authentication, and data encryption, ensuring a secure and seamless end-user experience with efficient load times and robust security protocols.`,
      },
   
{
    date: "Apr 2023",
    company: "Northeastern University",
    title: "Visulization BI tool",
    git: ["https://github.com/amarpriyesh/visualization-app"],
    technology: "Python, Tkinter, Matplotlib, Pandas",
    youtube: "/visualization.png",
    content: `Engineered a dynamic data visualization tool in Python utilizing libraries such as Pandas for data manipulation, Matplotlib for plotting, and NumPy for numerical computations, incorporating Tkinter to create an interactive GUI that enables users to select datasets, graph types, and variables for customized visual analysis.
 Designed and implemented a robust graphical user interface using Tkinter, allowing for intuitive user interaction with complex datasets, and integrated Matplotlib to render a variety of plots, such as scatter, bar, and line graphs, facilitating insightful data exploration and pattern recognition.`,
 },
{
      date: "May 2023",
      company: "Northeastern University",
      title: "Smart Savr Wallet App",
      git: ["https://github.com/amarpriyesh/SmartSavr"],
      technology: "Java, Android, kotlin, Firestore, Gradle",
      youtube: "/smartsavrcharts.png",
      content: `Developed an Android application called "Smart Saver" that enables parents to monitor their child's chores and rewards.
      Incorporated sensors and features such as GPS, camera, intents, notifications, recycler views, and fragments to enhance the UI.`,
    },

 
    {
      date: "Mar 2023",
      company: "Northeastern University",
      title: "Weather App",
      git: ["https://github.com/amarpriyesh/SmartSavr"],
      technology: "Java, Android, kotlin, Firestore, Gradle, Retrofit",
      youtube: "/weatherapp.png",
      content: `Developed an intuitive Android weather application using Java and Kotlin in Android Studio, integrating Retrofit for robust network operations, parsing JSON data from a third-party API, resulting in a seamless user experience for real-time weather updates.
Implemented a RecyclerView to efficiently display daily weather forecasts, incorporating Material Design principles for a visually appealing interface; optimized app performance through meticulous testing and debugging, ensuring reliability and high user satisfaction.`,
    },
    {
        date: "May 2022",
        company: "Northeastern University",
        title: "Tuiter Website (Twitter)",
        git: ["https://github.com/amarpriyesh/final-project-tuiter-node", "https://github.com/amarpriyesh/final-project-tuiter-react"],
        technology: "JavaScript, React, Express, Jest, Axios, MongoDB, Node, MERN, HTML, CSS, Bootstrap",
        youtube: "/tuiter-message.png",
        content: `Developed front end and back end of a social media website called Tuiter using MERN Stack technologies such as Mongoose, Express, JavaScript, TypeScript, Bootstrap, and React.js, further exposed REST APIs to serve HTTP requests on a Node.js server.`,
      },
    {
      date: "Nov 2021",
      company: "Northeastern University",
      technology: "Java, Junit, Swing, MVC, OOPS", 
      title: "PAC Man with Dungeons Game",
      youtube:"https://www.youtube.com/embed/aSVG7jiO6sY",
      git: ["https://github.com/amarpriyesh/Pac-Man-Adventure-Game"],
      content: `Constructed an adventure game using MVC principles and object-oriented design patterns to make the gameplay realistic.
      Tested project modules using a JUnit 4 test suite, achieving 86% coverage. Implemented the game's view using Java Swing library.`,
    },
    // ... more events
  ];

  const [events, setEvents] = useState(list)

  const eventFilter = () => {
    console.log(filter)
   const fil =  Object.entries(filter).filter(([key, value]) => value === true).map(([key]) => key)

   console.log(fil)
   let newList = []
   if (fil.length === 0 ) {
    newList = list 
   }
   else {
    newList = list.filter((item, index) => {
        return fil.some(filterItem =>   item.technology.toLowerCase().split(",").map(a => a.trim()).includes(filterItem) );
      });

   }

 

  setEvents(newList)

   
  }

  const filterItems = () => {
    return (
        <div className="flex-wrap flex  gap-2 md:text-base sm:text-sm text-xs md-gap-1 ">
            {Object.entries(filter).map(([key, value], index) => ( <div className={`${value ? "bg-teal-300" :  "bg-slate-400" } rounded-lg px-1 md:px-2 drop-shadow-2xl dark:border-slate-300 border-gray-400 border shadow-black hover:cursor-pointer`} onClick={() => {setFilter({...filter, [key]:!value} ) }  } key={index}>{key}</div>))}
        </div>
    )

  }
  

  useEffect(() => {
    mapFilter["java"] = false
    mapFilter["python"] = false
    mapFilter["javascript"] = false
    mapFilter["javascript"] = false
events.map( a => a.technology.split(",").map(b => mapFilter[b.trim().toLowerCase()] = false))
setFilter(mapFilter)
  },[]) 

  useEffect( () => {eventFilter()},[filter])
  return (
    <Layout title="Priyesh's Portfolio">
      {
        <div className="flex flex-col items-start justify-start w-full   ">
        <div className=" md:my-4 my-0"><div className="dark:text-slate-300 text-gray-600 md:text-xl text-lg mb-1 ">Filter Results:</div>{filterItems()}</div>
        <div className=" text-xl dark:text-slate-300 text-gray-600 md:my-2 my-0">
        Projects:
      </div>
          <div className="relative w-full">
            {/* Vertical Line */}
            <div className="absolute sm:block hidden  transform -translate-x-1/4 w-0.5 mx-4 dark:bg-purple-400 bg-gray-400 h-full" style={{left:"27%" }} />

            {events.map((event, index) => (
              <div
                key={index}
                id={event.title}
                className="sm:flex sm:flex-row  flex-col items-center my-4 w-full relative px-1  rounded-lg  shadow-lg sm:border-none sm:shadow-none"
              >
                {/* Event Title on the Left */}
                <div className=" sm:w-3/12  w-full flex-col   text-center items-center  border shadow-2xl rounded-xl px-1   mr-2 sm:-ml-3 md:text-base text-xs" >
                  <div className=" text-center  px-2 font-medium dark:text-slate-400 text-gray-600">
                    {event.title}
                  </div>
                  <div className=" px-2 dark:text-slate-400 text-gray-600">
                    {event.company}
                  </div>
                  <div> {returnTechnology(event.technology)}</div>
                </div>

                

                {/* Date on the Line */}
                {/* <div id="div1"
                  className="h-8 px-2  flex items-center justify-center  bg-teal-300 border border-gray-400 shadow-2xl shadow-black
              text-gray-800 rounded-md  left-1/4 transform -translate-x-1/2 text-sm p-1"
                >
            
                  {event.date}
                </div> */}
              

                <div className=" text-center w-6   py-1 xs:w-10  lg:w-20  hidden  text-xs md:text-sm  lg:text-base absolute h-10 lg:h-8   sm:flex  items-center justify-center  bg-teal-300 border border-gray-400 shadow-2xl shadow-black
              text-gray-800 rounded-md lg:-translate-x-1/4 transform" style={{left:"26.8%"}}>{event.date}</div>
              
                <div className="sm:w-1/12 sm:block hidden m-2"></div>

                {/* Event Content on the Right */}
                <div className=" sm:w-8/12  w-full lg:flex border shadow-2xl rounded-xl sm:text-sm text-xs sm:ml-10 -mr-6 lg:-mr-0 lg:ml-2 xl:ml-0 my-2 sm:my-1">
                  <div className="px-8 w-full lg:w-7/12  md:text-md flex-col  py-4 dark:text-slate-400 text-gray-600 ">
                    {returnBullets(event.content)}
                  </div>
                  <div className="p-2 w-full lg:w-5/12 border rounded-xl dark:border-slate-600 shadow-2xl dark:text-slate-400 text-gray-600 ">
                    {!event.youtube.includes("youtube") ? <div  ><img className="aspect-square" src={event.youtube}
                   ></img></div>:<div
                      class="aspect-square rounded-lg overflow-hidden "
                      style={{ width: "100%", height: "100%" }}
                    >
                      <iframe
                        class="relative top-0 left-0 w-full h-full"
                        src={event.youtube}
                        title="YouTube video"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        allowFullScreen
                      ></iframe>
                    </div>
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    </Layout>
  );
};

export default Projects;
