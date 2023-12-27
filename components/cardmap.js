import Card from "./card";
const CardMap = ({ data }) => {
  return (
    <div className=" md:flex md:flex-wrap ">
      {data.map((items, idx) => (
        <div key={idx} className="lg:w-1/3 xl:w-1/4 md:w-1/2 w-full px-4 py-2 mt-4">
          <Card data={items} key={idx} />
        </div>
      ))}
    </div>
  );
};

export default CardMap;
