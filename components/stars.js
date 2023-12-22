import Front from "@/pages/front";

export default function TwinklingBackground({ Children }) {
  return (
    <div className="relative w-full h-full ">
      <div
        className="relative h-full w-screen  animated-element"
        style={{ top: "-80px", scale: "150%" }}
      >
        <div className="moon opacity-0" style={{ left: "12%" }}></div>
      </div>
      {/* Multiple stars for the twinkling effect */}
      {Array.from({ length: 100 }).map((_, index) => (
        <div
          key={index}
          className="star hidden dark:block z-0 opacity-0"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * (2 - 0.5) + 0.5}s`, // Random duration between 0.5s and 2s
            animationDelay: `${Math.random() * 2}s`, // Random delay up to 2s
          }}
        >
          {" "}
        </div>
      ))}
      <div className="z-10">
        <Children />
      </div>
    </div>
  );
}
