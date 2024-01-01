import Link from "next/link";
import Layout from "../layout";
import React, { useState, useEffect } from "react";
import {projectList} from "@/components/projectList";
import { BsGithub, BsCamera } from "react-icons/bs";

const Projects = () => {
  const [filter, setFilter] = useState({});

  let mapFilter = {};

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
          <div
            key={key}
            className=" bg-teal-300 rounded-lg px-2 text-xs drop-shadow-2xl dark:border-slate-300 border-gray-400 border shadow-black"
          >
            {" "}
            {a}
          </div>
        ))}
      </div>
    );
  };
  const list = projectList

  const [events, setEvents] = useState(list);

  const eventFilter = () => {
    console.log(filter);
    const fil = Object.entries(filter)
      .filter(([key, value]) => value === true)
      .map(([key]) => key);

    console.log(fil);
    let newList = [];
    if (fil.length === 0) {
      newList = list;
    } else {
      newList = list.filter((item, index) => {
        return fil.some((filterItem) =>
          item.technology
            .toLowerCase()
            .split(",")
            .map((a) => a.trim())
            .includes(filterItem)
        );
      });
    }

    setEvents(newList);
  };

  const filterItems = () => {
    return (
      <div className="flex-wrap flex  gap-2 md:text-base sm:text-sm text-xs md-gap-1 ">
        {Object.entries(filter).map(([key, value], index) => (
          <div
            className={`${
              value ? "bg-teal-300" : "bg-slate-400"
            } rounded-lg px-1 md:px-2 drop-shadow-2xl dark:border-slate-300 border-gray-400 border shadow-black hover:cursor-pointer`}
            onClick={() => {
              setFilter({ ...filter, [key]: !value });
            }}
            key={index}
          >
            {key}
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    mapFilter["java"] = false;
    mapFilter["python"] = false;
    mapFilter["javascript"] = false;
    mapFilter["javascript"] = false;
    events.map((a) =>
      a.technology
        .split(",")
        .map((b) => (mapFilter[b.trim().toLowerCase()] = false))
    );
    setFilter(mapFilter);
  }, []);

  useEffect(() => {
    eventFilter();

  }, [filter]);

  const getGitText= (text) => {
    if (text.toLowerCase().includes("node")) {
      return "GitHub Backend"
    }
    else if (text.toLowerCase().includes("react")) {
      return "GitHub Frontend"
    }
    else {
      return "GitHub"
    }

  }
  const hint = " (select to filter results by technology)"
  const hint1 = " (click on the title for pictures)"
  return (
    <Layout title="Priyesh's Portfolio">
      {
        <div className="flex flex-col items-start justify-start w-full   ">
          <div className=" md:my-4 my-0">
            <div className="dark:text-slate-300 text-gray-600 md:text-xl text-lg mb-1 flex-row flex items-center">
              Filter Results: <div className="ml-1 md:text-sm text-xs">{hint}</div>
            </div>
            {filterItems()}
          </div>
          <div className=" text-xl dark:text-slate-300 text-gray-600 md:my-2 my-0 flex-row flex items-center">
            Projects: <div className="ml-1 md:text-sm text-xs">{hint1}</div>
          </div>
          <div className="relative w-full">
            {/* Vertical Line */}
            <div
              className="absolute sm:block hidden  transform -translate-x-1/4 w-0.5 mx-4 dark:bg-purple-400 bg-gray-400 h-full"
              style={{ left: "27%" }}
            />

            {events.map((event, index) => (
              <div
                key={index}
                id={event.title}
                className="sm:flex sm:flex-row  flex-col items-center my-4 w-full relative px-1  rounded-lg border py-1  shadow-2xl sm:border-none sm:shadow-none"
              >
                {/* Event Title on the Left */}
              
                <div className=" sm:w-3/12  w-full flex-col   text-center items-center  sm:border sm:shadow-2xl rounded-xl px-1   mr-2 sm:-ml-3 md:text-base text-xs">
                <Link href={`/projects/gallery/?galleryItem=${event.title}#gallery`} className="w-fit">
                  <div className=" text-center  px-2 font-medium dark:text-slate-400 text-gray-600 hover:scale-110">
                    {event.title}
                  </div>
                  <div className=" px-2 dark:text-slate-400 text-gray-600">
                    {event.company}
                  </div>
                  <div> {returnTechnology(event.technology)}</div>
                  <div className="flex flex-row justify-center items-center hover:scale-125"><BsCamera className="mr-1"/>Photo Gallery</div>
                  
                  </Link>
                  <ul className="text-gray-600 dark:text-slate-300 justify-center items-center flex-col flex">{event.git.map((val, index) => <li key={index} className="flex flex-row text-xs hover:scale-110"><BsGithub className="text-sm"/><Link href={val} className="flex-wrap ml-1">{getGitText(val)}</Link></li>)}</ul>
                  
                </div>
                

                {/* Date on the Line */}
                {/* <div id="div1"
                  className="h-8 px-2  flex items-center justify-center  bg-teal-300 border border-gray-400 shadow-2xl shadow-black
              text-gray-800 rounded-md  left-1/4 transform -translate-x-1/2 text-sm p-1"
                >
            
                  {event.date}
                </div> */}

                <div
                  className=" text-center w-6   py-1 xs:w-10  lg:w-20  hidden  text-xs md:text-sm  lg:text-base absolute h-10 lg:h-8   sm:flex  items-center justify-center  bg-teal-300 border border-gray-400 shadow-2xl shadow-black
              text-gray-800 rounded-md lg:-translate-x-1/4 transform"
                  style={{ left: "26.8%" }}
                >
                  {event.date}
                </div>

                <div className="sm:w-1/12 sm:block hidden m-2"></div>

                {/* Event Content on the Right */}
                <div className=" sm:w-8/12  w-full lg:flex sm:border sm:shadow-2xl rounded-xl sm:text-sm text-xs sm:ml-10 -mr-6 lg:-mr-0 lg:ml-2 xl:ml-0 my-2 sm:my-1">
                  <div className="px-8 w-full lg:w-7/12  md:text-md flex-col  py-4 dark:text-slate-400 text-gray-600 ">
                    {returnBullets(event.content)}
                  </div>
                  <div className="p-2 w-full lg:w-5/12 sm:border rounded-xl dark:border-slate-600 sm:shadow-2xl dark:text-slate-400 text-gray-600 ">
                    {!event.youtube.includes("youtube") ? (
                      <div>
                        <img
                          className="aspect-square"
                          src={event.youtube}
                        ></img>
                      </div>
                    ) : (
                      <div
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
                    )}
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
