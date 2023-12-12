const Carousel = ({title,content}) => {

    return (
        <div className="text-center  rounded-xl shadow-2xl p-10 m-1 ">
        <div className="inline-block transition-transform duration-300 hover:scale-125">
          <img src="/design.png" width={100} height={100} />
        </div>
        <h3 className="text-lg font-medium pt-8 pb-2">
          {title}
        </h3>
        <p>{content}</p>
        <h4 className="py-4 text-teal-600">Design tools I use</h4>
        <p className="text-gray-800 py-1">photo shop</p>
        <p className="text-gray-800 py-1">figma</p>
      </div>)

}

export default Carousel;