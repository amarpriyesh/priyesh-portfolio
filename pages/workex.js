import { workList } from "@/components/workList";
import {useState} from "react"
const WorkEx = () => {
  const events = workList
  
  const k = events.flatMap(a => a.content.flatMap(a => a.technology.split(",").map(a => a.trim().toLocaleLowerCase())))
  
  let filterMap = k.reduce((acc, val) => {acc[val] = false ; return acc},{})
  const [filters, setFilters] = useState(filterMap)

  const filter = (data) => {
   let allFalse = true
    
    for(const key in filters) {
      if (filters[key]) {
        allFalse = false
        break
      }


      
    }

    if(allFalse) {
      return true
    }


    let anyFilter = false
    const filterKeys = Object.keys(filters)
    const techs = data.technology.split(",").map(a => a.trim().toLowerCase())

    

    for (const tech in techs) {
 
     
      if (filterKeys.includes(techs[tech])) {
       
        if(filters[techs[tech]]) {
          anyFilter = true
          break
        }
        
      }
    }

    if(anyFilter) {
      return true
    }

    return false
    
  }

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
  

  const filterItems = () => {
    return (
      <div className="flex-wrap flex  gap-2 md:text-base sm:text-sm text-xs md-gap-1 ">
        {Object.entries(filters).map(([key, value], index) => (
          <div
            className={`${
              value ? "bg-teal-300" : "bg-slate-400"
            } rounded-lg px-1 md:px-2 drop-shadow-2xl dark:border-slate-300 border-gray-400 border shadow-black hover:cursor-pointer`}
            onClick={() => {
              setFilters({ ...filters, [key]: !value });
            }}
            key={index}
          >
            {key}
          </div>
        ))}
      </div>
    );
  };


  return (
    <div className="flex flex-col items-start justify-start w-full">
      <div className=" md:my-4 my-0">
        <div className="dark:text-slate-300 text-gray-600 md:text-xl text-lg ">
          Filter Results:
        </div>
        <div >
      {filterItems()}
      </div>
      </div>

   
      <div className=" text-xl dark:text-slate-300 text-gray-600 md:my-4 my-0">
       Work Experience:
      </div>
      <div className="relative w-full">
        {/* Vertical Line */}
        <div
          className="hidden sm:flex absolute  transform -translate-x-1/4 w-0.5 mx-4 dark:bg-purple-400 bg-gray-400 h-full"
          style={{ left: "27%" }}
        />

        {events.map((event, index) => (
          <div
            key={index}
            className="sm:flex sm:flex-row flex-col flex items-center my-4 w-full relative py-1 sm:px-1 sm:shadow-none sm:border-none border shadow-2xl rounded-lg"
          >
            {/* Event Title on the Left */}
            <div className="sm:w-3/12 w-full flex-col   text-center items-center  sm:border sm:shadow-2xl rounded-xl px-1  sm:mr-2 sm:-ml-3 md:text-base text-xs">
              <div className=" text-center  px-2 font-medium dark:text-slate-400 text-gray-600">
                {event.company}
              </div>
              <div>
                <div className=" px-2 dark:text-slate-400 text-gray-600">
                  {event.title}
                </div>
                <div className=" px-2 dark:text-slate-400 text-gray-600">
                  {event.dateLong}
                </div>
              </div>
            </div>

            {/* Date on the Line */}
            {/* <div id="div1"
            className="h-8 px-2  flex items-center justify-center  bg-teal-300 border border-gray-400 shadow-2xl shadow-black
        text-gray-800 rounded-md  left-1/4 transform -translate-x-1/2 text-sm p-1"
          >
      
            {event.date}
          </div> */}

            <div
              className=" hidden sm:flex text-center w-6   py-1 xs:w-10  lg:w-20  text-xs md:text-sm  lg:text-base absolute h-10 lg:h-8    items-center justify-center  bg-teal-300 border border-gray-400 shadow-2xl shadow-black
        text-gray-800 rounded-md lg:-translate-x-1/4 transform"
              style={{ left: "26.8%" }}
            >
              {event.date}
            </div>

            <div className="w-1/12 m-2 hidden sm:block"></div>

            {/* Event Content on the Right */}
            <div className=" sm:w-8/12 w-full lg:flex sm:border sm:shadow-2xl rounded-xl sm:text-sm text-xs sm:ml-10 sm:-mr-6 lg:-mr-0 lg:ml-2 xl:ml-0">
              <div className="px-8   md:text-md flex-col  py-4 dark:text-slate-400 text-gray-600 ">
                {event.content.filter(a => filter(a)).map(a => returnBullets(a.content))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkEx;
