import Layout from "../layout";
import { BsChevronBarLeft, BsChevronBarRight } from "react-icons/bs";
import { useState, useEffect, useMemo } from "react";
import { useSwipeable } from "react-swipeable";
import { BsPause, BsPlay } from "react-icons/bs";
import { useRouter } from "next/router";
import { projectList } from "@/components/projectList";


const Gallery = () => {

    const router = useRouter();
    const { galleryItem } = router.query;
    const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);
  const textWarning = "(Click on Pause to stop animation)"

  const galleryMap = projectList
  .filter((project) => project.title === galleryItem)
  .reduce((acc, project) => {
    acc[project.title] = project.imageList;
    return acc;
  }, {});

console.log("galleryMap", galleryMap);

const gallery = galleryMap[galleryItem];


  const handleNext = () => {
    index < gallery.length - 1 ? setIndex(index + 1) : setIndex(0);
  };

  const handlePrev = () => {
    index > 0 ? setIndex(index - 1) : setIndex(gallery.length - 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handlePrev,
    onSwipedRight: handleNext,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    let interval = 0;
    if (!pause) {
      interval = setInterval(() => {
        handleNext();
      }, 3000);
    } // 10000 milliseconds = 10 seconds

  


    return () => clearInterval(interval); // Clear interval on component unmount
  }, [index, pause]);

  if (router.isReady && !galleryItem) {
    return <div>Loading...</div>;
  }

  // Check if galleryItem is in galleryMap



  // Check if galleryItem is valid and present in galleryMap
  if (!galleryMap[galleryItem] || galleryMap[galleryItem].length === 0) {
    return <div>Gallery Item not present</div>;
  }

 

 




  return (
    <Layout title="Priyesh's Portfolio">
      <div className="text-gray-600 dark:text-slate-300">
        <div className="flex flex-col w-full  items-center">
          <div id="gallery" className="md:text-xl text-sm flex items-baseline ">
            {galleryItem + " Gallery"}<span className="md:text-sm text-xs ml-2">{textWarning}</span>
          </div>

          <div className="text-3xl flex font-extrabold w-16 justify-center  rounded-lg border-2 text-gray-600 dark:text-slate-300  shadow-2xl mb-1 hover:scale-125  ">
            {pause ? (
              <BsPlay onClick={() => setPause(false)} />
            ) : (
              <BsPause onClick={() => setPause(true)} />
            )}
          </div>
        </div>

        <div {...handlers} className="flex-row h-full flex">
          <div
            className="flex flex-col w-fit  justify-center items-center "
            onClick={() => handlePrev()}
          >
            <BsChevronBarLeft className="text-3xl h-16 rounded-lg border-2 text-gray-600 dark:text-slate-300  shadow-2xl mr-1 hover:scale-125 hidden md:flex" />
          </div>

          <div
            className="flex flex-col justify-center items-center"
            style={{
              height: "90vh",
              width: "80vw",
              justifyContent: "center",
              justifyItems:"center"
            }}
          >
            <img
              src={gallery[index]}
              className=" h-full border rounded-lg shadow-lg "
              style={{ cursor: "grab" }}
            />
          </div>

          <div
            className="flex flex-col w-fit  justify-center items-center"
            onClick={() => handleNext()}
          >
            <BsChevronBarRight className="text-3xl h-16 rounded-lg border-2 text-gray-600 dark:text-slate-300 shadow-2xl ml-1 hover:scale-125 hidden md:flex" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
