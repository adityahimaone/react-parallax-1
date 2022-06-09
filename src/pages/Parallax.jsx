// import React, { useRef } from "react";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import sky from "../assets/img/sky.jpg";
// import star from "../assets/img/star.jpg";
// import skystar from "../assets/img/blacksky.jpg";
// import stargif from "../assets/img/stargif.gif";
// export default function ParallaxPage() {
//   const ref = useRef();
//   return (
//     <div>
//       <Parallax className="bg-black" pages={4} ref={ref}>
//         <ParallaxLayer
//           offset={0}
//           speed={1}
//           factor={2}
//           style={{ backgroundImage: `url(${sky})`, backgroundSize: "cover" }}
//           className="flex justify-center items-center"
//         />

//         <ParallaxLayer
//           offset={2}
//           speed={1}
//           factor={4}
//           style={{
//             backgroundImage: `url(${skystar})`,
//             backgroundSize: "cover",
//           }}
//           className="flex justify-center items-center"
//         />

//         <ParallaxLayer
//           sticky={{ start: 1.2, end: 2.8 }}
//           className="flex justify-center items-center"
//         >
//           <img src={stargif} />
//         </ParallaxLayer>

//         <ParallaxLayer
//           offset={0}
//           speed={0.05}
//           onClick={() => ref.current.scrollTo(3)}
//           className="flex justify-center items-center"
//         >
//           <div>
//             <h2 className="text-4xl md:text-6xl text-white text-center">
//               Welcome To Parallax Effect
//             </h2>
//           </div>
//         </ParallaxLayer>
//         <ParallaxLayer
//           offset={3}
//           speed={2}
//           onClick={() => ref.current.scrollTo(0)}
//           className="flex justify-center items-center"
//         >
//           <div>
//             <h2 className="text-6xl text-white">It is Bottom</h2>
//           </div>
//         </ParallaxLayer>
//       </Parallax>
//     </div>
//   );
// }
