import Layout from "./layout";

const Projects = () => {
  const returnBullets = (text) => {
    const arr = text.split("\n");
    return (
      <div>
        {" "}
        <ul className="list-disc dark:text-gray-400">
          {arr.map((a) => (
            <li> {a}</li>
          ))}
        </ul>{" "}
      </div>
    );
  };
  const events = [
    {
      date: "Jul 2022",
      company: "Charles River Development",
      title: "Software Development Intern",
      content: `"Details of event 1jjjjjjjjjjjjjjjjjjjjkkkkkkkkkkkkk
            kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
            kkkkkkkkkkkkkkkkkk
            Details of event 1jjjjjjjjjjjjjjjjjjjjkkkkkkkkkkkkk
            kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
            kkkkkkkkkkkkkkkkkk
            Details of event 1jjjjjjjjjjjjjjjjjjjjkkkkkkkkkkkkk
            kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
            kkkkkkkkkkkkkkkkkk
            Details of event 1jjjjjjjjjjjjjjjjjjjjkkkkkkkkkkkkk
            kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
            kkkkkkkkkkkkkkkkkk"`,
    },
    {
      date: "Mar 2019",
      company: "Charles River Development",
      title: "Event 2",
      content: "Details of event 2...",
    },
    {
      date: "Feb 2021",
      company: "Charles River Development",
      title: "Event 3",
      content: "Details of event 3...",
    },
    // ... more events
  ];
  return (
    <Layout title="Priyesh's Portfolio">
      {
        <div className="flex flex-col items-start justify-start w-full">
          <div className="relative w-full">
            {/* Vertical Line */}
            <div className="absolute left-1/4 transform -translate-x-1/4 w-0.5 mx-4 dark:bg-purple-400 bg-gray-400 h-full" />

            {events.map((event, index) => (
              <div
                key={index}
                className="flex items-center my-4 w-full relative "
              >
                {/* Event Title on the Left */}
                <div className=" w-3/12 -ml-10  flex-col flex items-center shadow-2xl border shadow-2xl rounded-xl">
                  <div className=" text-center px-2 dark:text-slate-400 text-gray-600">
                    {event.title}
                  </div>
                  <div className=" px-2 dark:text-slate-400 text-gray-600">
                    {event.company}
                  </div>
                </div>

                {/* Date on the Line */}
                <div
                  className=" h-8 px-2 flex items-center justify-center ml-4 bg-teal-300 border border-gray-400 shadow-2xl shadow-black
              text-gray-800 rounded-md absolute left-1/4 transform -translate-x-1/2"
                >
                  {event.date}
                </div>

                {/* Event Content on the Right */}
                <div className="ml-28 w-8/12 lg:flex border shadow-2xl rounded-xl">
                  <div className="px-8 w-full lg:w-7/12 text-sm md:text-md flex-col  py-4 dark:text-slate-400 text-gray-600 ">
                    {returnBullets(event.content)}
                  </div>
                  <div className=" p-2  w-full lg:w-5/12 border rounded-xl dark:border-slate-600 shadow-2xl dark:text-slate-400 text-gray-600 ">
                    <div
                      class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden "
                      style={{ width: "100%", height: "100%" }}
                    >
                      <iframe
                        class="relative top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/aSVG7jiO6sY"
                        title="YouTube video"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        allowFullScreen
                      ></iframe>
                    </div>
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
