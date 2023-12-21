const Carousel = ({ title, content, image, idx, currentSlideV }) => {
  const getItemStyle = (index, slide) => {
    if (index === slide) {
      return { width: "100%", height: "500px" };
    } else {
      return { width: "100%", height: "500px" };
    }
  };

  const boxStyle = (index, slide) => {
    if (index === slide) {
      return { width: "100%", height: "600px" , boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", // Equivalent to shadow-2xl
      border: "2px solid #e2e8f0",};
    } else {

      return { width: "95%", height: "600px", boxShadow: "0 8px 16px -8px rgba(0, 0, 0, 0.2)",// Adjust as needed
      border: "1px solid  #e2e8f0",   marginLeft:"5px"} ;
    }
  };

  return (
    <div className="text-center  rounded-2xl transition-transform duration-300 hover:scale-120 slide-current:bg-slate-400" style={boxStyle(idx, currentSlideV)}>
      <h3 className="text-lg font-medium pt-2 pb-2 dark:text-white">{title}</h3>
      <p className="dark:text-white pb-2">{content}</p>
      <div className="inline-block  " style={getItemStyle(idx, currentSlideV)}>
        <img
          className="rounded-2xl p-1 border-l-black "
          src={image}
          style={{ width: "100%", height: "100%", objectFit: "fill" }}
        />
      </div>
    </div>
  );
};

export default Carousel;
