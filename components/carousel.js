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
      return {
        width: "100%",
        height: "600px",
        marginBottom:"32px",
        boxShadow: "20px 20px 20px -12px rgba(0, 0, 0, 0.5)", // Equivalent to shadow-2xl
     
      };
    } else {
      return {
        width: "95%",
        height: "600px",
       // Adjust as needed
        
        marginLeft: "5px",
      };
    }
  };

  return (
    <div
      className="text-center border-2 border-gray-500  rounded-2xl transition-transform duration-300 hover:scale-120 slide-current:bg-slate-400"
      style={boxStyle(idx, currentSlideV)}
    >
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
