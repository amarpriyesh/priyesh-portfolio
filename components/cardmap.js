import Card from "./card"
const CardMap = ({data}) => {
    
    return (
        <div className=" lg:flex lg:flex-wrap mb-20">
            {data.map( (items, idx) => (<div key={idx} className="lg:w-1/3 px-4 h-96 mt-4"><Card data={items} key={idx}/></div>))}
        </div>
    )

}

export default CardMap