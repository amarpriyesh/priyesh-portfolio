const WorkEx = () => {
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
  const events = [
    {
      date: "Jul 2022",
      dateLong: "Jul 2022 - Dec 2022",
      company: "Charles River Development",
      title: "Software Development Intern",
      content: `Developed a log analyzer module in Java to compare incoming FIX messages from brokers and outgoing messages to clients, improving performance testing time by more than 90%.
      Migrated from ant-based build to Gradle build for better dependency management and moved version control from perforce to GitHub to facilitate Azure integration and streamline the CI/CD pipeline.
      Collaborated with a team of five, debugging and troubleshooting trading issues by working on new features and patches utilizing data models and Java beans, and leveraging JPA (Hibernate) for efficient database interactions.`,
    },
    {
      date: "Jul 2020",
      dateLong: "Jul 2020 - Aug 2021",
      company: "Hughes Systique",
      title: "Senior Engineer",
      content: `Created a web application leveraging React to display various API responses cutting down post-deployment regression testing time by 80% and employed Site 24x7 tool to monitor availability of API services enabling the team to debug API issues.
      Designed and deployed Python/Flask-based scalable AI microservice using Docker containers on AWS ECS helping organization to identify and filter spam messages, additionally exposed REST APIs to ensure integration with .net (c# based) backend.
      Achieved 60% reduction in customer escalation by streamlining the internet usage consumption dashboard through query optimization and granular data storage implementation, using Python, SQL loader, CRON jobs, and Shell Scripts.`,
    },
    {
      date: "Nov 2015",
      dateLong: "Nov 2015 - May 2020",
      company: "Ericsson",
      title: "Software Engineer",
      content: `Utilized JavaScript and rapid application development techniques to devise and debug a ticketing application, Micro-focus Service Manager, improving IT service management processes such as Incident, Problem, and Change Management.
      Integrated service manager with the CRM tool through restful web services, created features resulting in a 20% reduction in incorrect assignment of trouble tickets to resolver groups through automatic routing.
      Utilized Java Spring boot framework to architect backend solution implementing an Event to Trouble-Ticket integration through restful APIs, schemas, and processes, resulting in a 30% reduction in event resolution time.
      Lead deployment releases, making significant contribution to scrum meetings, code review, sprint planning, and retrospectives in compliance with Agile SDLC principles, additionally lead team building activities to foster problem-solving and communication.`,
    },
    // ... more events
  ];

  return (
    <div className="flex flex-col items-start justify-start w-full">
      <div className=" md:my-4 my-0">
        <div className="dark:text-slate-300 text-gray-600 md:text-xl text-lg ">
          Filter Results:
        </div>
        <div className="flex flex-wrap justify-between my-1  w-full lg:gap-2 md:text-base gap-0 sm:text-sm text-xs md:gap-1">
        <div className="mr-4 bg-slate-400 rounded-lg px-2 drop-shadow-2xl dark:border-slate-300 border-gray-400 border shadow-black">
          Software
        </div>
        <div className="mr-4 bg-slate-400 rounded-lg px-2 drop-shadow-2xl dark:border-slate-300 border-gray-400 border shadow-black">
          Cloud and Infrastructure
        </div>
        <div className="bg-slate-400 rounded-lg px-2 drop-shadow-2xl dark:border-slate-300 border-gray-400 border shadow-black ">
          Data Engineeing
        </div>
      </div>
      </div>

   
      <div className=" text-xl dark:text-slate-300 text-gray-600 md:my-4 my-0">
        Software Engineering
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
            <div className=" sm:w-3/12 w-full flex-col   text-center items-center  sm:border sm:shadow-2xl rounded-xl px-1  sm:mr-2 sm:-ml-3 md:text-base text-xs">
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
                {returnBullets(event.content)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkEx;
