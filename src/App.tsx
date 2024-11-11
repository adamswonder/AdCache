// import React from "react";
// import Carousel from "./carousel";
// // import joyfully from "./assets/joyfully.png";
// // import planningImage from "./assets/planning.png";
// // import wiselyImage from "./assets/wisely.png";
// import joyfullyImageSm from "./assets/sm-joyfully.png";
// import planningImageSm from "./assets/sm-planning.png";
// import wiselyImageSm from "./assets/sm-wisely.png";
// import "./index.css";

// const images = [
//   {
//     src: planningImageSm,
//     alt: "Wise Planning",
//     title: "Plan Your Future Wisely",
//     description: "Expert guidance to help you create a solid financial roadmap",
//   },
//   {
//     src: wiselyImageSm,
//     alt: "Smart Investing",
//     title: "Invest With Confidence",
//     description: "Grow your wealth with our proven investment strategies",
//   },
//   {
//     src: joyfullyImageSm,
//     alt: "Joyful Living",
//     title: "Live Life Fully",
//     description: "Balance saving and living with our flexible financial solutions",
//   },
// ];

// const App: React.FC = () => {
//   return (
//     <div className="flex flex-col min-h-screen min-w-full bg-gradient-to-br from-blue-50 to-sky-100">

//       <header className="w-full py-2 xs:py-4 md:py-8 px-2 xs:px-4 md:px-12 bg-white/80 backdrop-blur-sm">
//         <div className="max-w-[1920px] mx-auto flex justify-between items-center">



//           <h1 className="text-xl xs:text-2xl md:text-4xl font-serif text-blue-800">Stanbic</h1>
//           <nav>
//             <button className="text-white hover:text-blue-500 hover:bg-white transition-colors text-xs xs:text-sm md:text-lg px-2 xs:px-4">
//               Get In Touch
//             </button>
//           </nav>
//         </div>
//       </header>
      

//       <main className="flex-1 flex items-center justify-center p-2 xs:p-4 md:p-16 w-full">
//         <div className="w-full max-w-[1920px]">

//           <h2 className="text-xl xs:text-3xl md:text-6xl font-serif text-center text-blue-800 mb-2 xs:mb-4 animate-fade-in">
//             Your Journey to Financial Wisdom
//           </h2>

//           <p className="text-sm xs:text-lg md:text-2xl text-center text-blue-600 mb-4 xs:mb-8 md:mb-16 animate-slide-up">
//             Discover the perfect balance of planning, investing, and living
//           </p>
          
//           <div className="aspect-video w-full">
//             <Carousel images={images} />
//           </div>



//           <div className="mt-4 xs:mt-8 md:mt-16 flex flex-col md:flex-row justify-center space-y-2 xs:space-y-4 md:space-y-0 md:space-x-12">
//             <button className="group relative px-4 xs:px-8 md:px-12 py-2 xs:py-4 bg-blue-600 text-white rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 text-sm xs:text-lg md:text-xl">
//               <span className="relative z-10">Start Your Plan</span>
//               <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
//             </button>

//             <button className="group relative px-4 xs:px-8 md:px-12 py-2 xs:py-4 bg-sky-600 text-white rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 text-sm xs:text-lg md:text-xl">
//               <span className="relative z-10">Meet an Advisor</span>
//               <div className="absolute inset-0 bg-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
//             </button>
//           </div>
//         </div>
//       </main>


//       <footer className="w-full py-2 xs:py-4 md:py-6 text-center text-blue-600 bg-white/50 text-xs xs:text-base md:text-lg">
//         <p>© {new Date().getFullYear()} Stanbic. Growing wealth, nurturing life.</p>
//       </footer>
//     </div>
//   );

// };
// export default App;

import React from "react";
import Carousel from "./carousel";
import joyfullyImageSm from "./assets/sm-joyfully.png";
import planningImageSm from "./assets/sm-planning.png";
import wiselyImageSm from "./assets/sm-wisely.png";
import "./index.css";

const images = [
  {
    src: planningImageSm,
    alt: "Wise Planning",
    title: "Plan Your Future Wisely",
    description: "Expert guidance to help you create a solid financial roadmap",
  },
  {
    src: wiselyImageSm,
    alt: "Smart Investing",
    title: "Invest With Confidence",
    description: "Grow your wealth with our proven investment strategies",
  },
  {
    src: joyfullyImageSm,
    alt: "Joyful Living",
    title: "Live Life Fully",
    description: "Balance saving and living with our flexible financial solutions",
  },
];

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-gradient-to-br from-blue-50 to-sky-100">
      <header className="w-full py-2 xs:py-4 md:py-8 px-2 xs:px-4 md:px-12 bg-white/80 backdrop-blur-sm">
        <div className="max-w-[1920px] mx-auto flex justify-between items-center">
          <h1 className="text-xl xs:text-2xl md:text-4xl font-serif text-blue-800">Stanbic</h1>
          <nav>
            <button className="text-white hover:text-blue-500 hover:bg-white transition-colors text-xs xs:text-sm md:text-lg px-2 xs:px-4">
              Get In Touch
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-4 w-full">
        <div className="flex flex-col items-center max-w-[1920px]">
          <h2 className="text-xl xs:text-3xl md:text-6xl font-serif text-center text-blue-800 mb-2 xs:mb-4 animate-fade-in">
            Your Journey to Financial Wisdom
          </h2>
          <p className="text-sm xs:text-lg md:text-2xl text-center text-blue-600 mb-4 xs:mb-8 md:mb-16 animate-slide-up">
            Discover the perfect balance of planning, investing, and living
          </p>
          
          {/* Centered, fixed-size Carousel */}
          <div className="w-[300px] h-[250px] flex justify-center items-center">
            <Carousel images={images} />
          </div>

          <div className="mt-4 xs:mt-8 md:mt-16 flex flex-col md:flex-row justify-center space-y-2 xs:space-y-4 md:space-y-0 md:space-x-12">
            <button className="group relative px-4 xs:px-8 md:px-12 py-2 xs:py-4 bg-blue-600 text-white rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 text-sm xs:text-lg md:text-xl">
              <span className="relative z-10">Start Your Plan</span>
              <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </button>

            <button className="group relative px-4 xs:px-8 md:px-12 py-2 xs:py-4 bg-sky-600 text-white rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 text-sm xs:text-lg md:text-xl">
              <span className="relative z-10">Meet an Advisor</span>
              <div className="absolute inset-0 bg-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </button>
          </div>
        </div>
      </main>

      <footer className="w-full py-2 xs:py-4 md:py-6 text-center text-blue-600 bg-white/50 text-xs xs:text-base md:text-lg">
        <p>© {new Date().getFullYear()} Stanbic. Growing wealth, nurturing life.</p>
      </footer>
    </div>
  );
};

export default App;
