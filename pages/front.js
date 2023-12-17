
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
  } from "react-icons/ai";
  import Slider from "react-slick";
  import Image from "next/image";
  import profile from "../public/profile.png";
  import design from "../public/design.png";
  
  import Carousel from "@/components/carousel";
  import CardCarousel from "@/components/cardcarousel";

const Front = () => {
    const data = [
        { title: "1", content: "aa" },
        { title: "2", content: "bb" },
        { title: "3", content: "bb" },
        { title: "4", content: "bb" },
        { title: "5", content: "bb" },
        { title: "6", content: "bb" }
      ];
    
return (
<>
      <div className="text-center pb-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl lg:text-8xl">
          Priyesh
        </h2>
        <h3 className="text-2xl py-2">Developer and Designer</h3>
        <p className="text-md py-5 leadin-8 text-gray-800 max-w-xl mx-auto">
          Technology enthusiast and software developer
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <AiFillTwitterCircle />
        <AiFillLinkedin />
        <AiFillYoutube />
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
        <img
          src="/profile.png"
          className="rounded-full"
          layout="fill"
          objectFit="cover"
        />
      </div>
    <section>
      <div>
        <h3 className="text-3xl py-1">Services I offer</h3>
        <p className="text-md py-2 leading-8 text-gray-800">
          Here are my Services <span className="text-teal-500">Tech</span>.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800">
          Here are my Services <span className="text-teal-500">Tech</span>.
        </p>
      </div>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-2xl p-10 rounded-xl my-10">
          <div className="inline-block transition-transform duration-300 hover:scale-125">
            <img src="/design.png" width={100} height={100} />
          </div>
          <h3 className="text-lg font-medium pt-8 pb-2">
            Beautiful Design
          </h3>
          <p>Creatig elegant designs suited for you</p>
          <h4 className="py-4 text-teal-600">Design tools I use</h4>
          <p className="text-gray-800 py-1">photo shop</p>
          <p className="text-gray-800 py-1">figma</p>
        </div>
        <div className="text-center shadow-2xl p-10 rounded-xl my-10">
          <div className="inline-block transition-transform duration-300 hover:scale-125">
            <img src="/design.png" width={100} height={100} />
          </div>
          <h3 className="text-lg font-medium pt-8 pb-2">
            Beautiful Design
          </h3>
          <p>Creatig elegant designs suited for you</p>
          <h4 className="py-4 text-teal-600">Design tools I use</h4>
          <p className="text-gray-800 py-1">photo shop</p>
          <p className="text-gray-800 py-1">figma</p>
        </div>
      </div>
    </section>
    <div>
    <CardCarousel cardsData={data}/>
    </div>
    <section>
      <div>
        <h3 className="text-2xl py-2">Portfolio</h3>
        <p>Creatig elegant designs suited for you</p>
        <h4 className="py-4 text-teal-600">Design tools I use</h4>
        <p className="text-gray-800 py-1">photo shop</p>
        <p className="text-gray-800 py-1">figma</p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover"
            src="/design.png"
            layout="responsive"
            width={"100%"}
            height={"100%"}
          ></img>
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover"
            src="/design.png"
            layout="responsive"
            width={"100%"}
            height={"100%"}
          ></img>
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover"
            src="/design.png"
            layout="responsive"
            width={"100%"}
            height={"100%"}
          ></img>
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover"
            src="/design.png"
            layout="responsive"
            width={"100%"}
            height={"100%"}
          ></img>
        </div>
      </div>
      </section>
      </>  
)
}

export default Front;