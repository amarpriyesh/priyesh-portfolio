const WorkEx = () => {
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
    <div className="flex flex-col items-start justify-start w-full">
      <div className="relative w-full">
        {/* Vertical Line */}
        <div className="absolute left-1/4 transform -translate-x-1/4 w-0.5 mx-4 dark:bg-purple-400 bg-gray-400 h-full" />

        {events.map((event, index) => (
          <div key={index} className="flex items-center my-4 w-full relative ">
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
            <div className="ml-28 w-8/12  flex-col flex border shadow-2xl rounded-xl">
              <div className=" px-2 dark:text-slate-400 text-gray-600 ">
                {event.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkEx;
