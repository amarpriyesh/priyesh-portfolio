const Card = ({ data }) => {
  const lines = data.description.split("\n");

  return (
    <div className="flex flex-col border items-center text-center shadow-2xl pt-10 px-10 rounded-xl h-full ">
      <div className="inline-block transition-transform duration-300 hover:scale-125">
        <img src="/design.png" width={100} height={100} />
      </div>
      <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-300">
        {data.title}
      </h3>

      <ul className="list-disc dark:text-gray-400">
        {lines.map((line, index) => (
          <li className="dark:text-grey-400 text-sm" key={index}>
            {line}
          </li>
        ))}
      </ul>

      {/* <p className="dark:text-gray-400 whitespace-pre-line">{data.description}</p> */}
    </div>
  );
};

export default Card;
