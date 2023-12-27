import Front from "@/pages/front";

export default function MovingClouds({Children}) {
    return (
        <div className="relative">
          <div className="relative h-full w-screen dark:hidden   animated-element" style={{  top: '-100px' , scale:"150%" }}>
          <div className="sun opacity-0" style={{ left: '10%' }}></div>
          </div>
        
      <div className="relative h-full w-screen dark:hidden animated-element" style={{  top: '150px' , }}>
        {/* Clouds */}
        <div className="cloud opacity-0" style={{ left: '0%' , scale:"160%" }}></div>
     
        <div className="cloud opacity-0" style={{ left: '30%',scale:"200%", top: '70px' , animation: "slide 4s"}}></div>
        
      </div>
      <div  className="interaction-layer hover-effect relative" style={{zIndex: "10"}}>

      <Children />
      </div>
    
     
      </div>
    );
  }
  