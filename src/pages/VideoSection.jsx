import React, { useRef } from "react";
import videobg from "../assets/video/bgvideo.mp4";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import earth from "../assets/img/earth.jpg";
import satellite from "../assets/img/satellite.gif";

export default function VideoSection() {
  const ref = useRef();
  return (
    <Parallax className="bg-black" pages={4} ref={ref}>
      <ParallaxLayer className="relative">
        <div className="absolute h-screen w-full bg-gradient-to-b from-slate-900/90 to-white/20"></div>
        <video
          className="w-full h-screen object-cover bg-white/10"
          loop
          autoPlay
          muted
          id="video"
        >
          <source src={videobg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={1}
        className="flex justify-center items-center"
      >
        <h1 className="text-4xl md:text-6xl text-black text-center font-Marker">
          Welcome To Earth
        </h1>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={1}
        className="relative"
        // style={{ backgroundColor: "#ff6d6d" }}
      >
        <img className="absolute right-0" src={satellite} alt="satelite" />
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={1}
        sticky={{ start: 1, end: 2 }}
        className="flex justify-center items-center"
      >
        <h1 className="text-4xl md:text-6xl text-white text-center font-Marker">
          This is Our Home
        </h1>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        style={{ backgroundImage: `url(${earth})`, backgroundSize: "cover" }}
      ></ParallaxLayer>
      <ParallaxLayer
        offset={3}
        speed={2}
        className="flex justify-center items-center"
        onClick={() => ref.current.scrollTo(0)}
      >
        <h1 className="text-4xl md:text-6xl text-white text-center font-Marker">
          The End
        </h1>
      </ParallaxLayer>
    </Parallax>
  );
}
