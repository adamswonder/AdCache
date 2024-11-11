import React from "react";
import Carousel from "./carousel";
import reactLogo from "./assets/joyfully.png";
import planningImage from "./assets/planning.png";
import wiselyImage from "./assets/wisely.png";
import "./index.css";

const images = [
  {
    src: planningImage,
    alt: "Wise Planning",
    title: "Plan Your Future Wisely",
    description: "Expert guidance to help you create a solid financial roadmap",
  },
  {
    src: wiselyImage,
    alt: "Smart Investing",
    title: "Invest With Confidence",
    description: "Grow your wealth with our proven investment strategies",
  },
  {
    src: reactLogo,
    alt: "Joyful Living",
    title: "Live Life Fully",
    description: "Balance saving and living with our flexible financial solutions",
  },
];

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-gradient-to-br from-blue-50 to-sky-100">
      <header className="w-full py-6 px-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-serif text-blue-800">Stanbic Bank</h1>
          <nav className="space-x-6">
            <button className="text-white hover:text-blue-500 hover:bg-white transition-colors">Get In Touch</button>
          </nav>
        </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center p-12 w-full">
        <div className="w-full max-w-5xl">
          <h2 className="text-5xl font-serif text-center text-blue-800 mb-4 animate-fade-in">
            Your Journey to Financial Wisdom
          </h2>
          <p className="text-center text-blue-600 mb-12 text-xl animate-slide-up">
            Discover the perfect balance of planning, investing, and living
          </p>
          <div className="w-full max-w-3xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-4 hover:shadow-2xl transition-shadow duration-300">
            <Carousel images={images} />
          </div>
          <div className="mt-12 flex justify-center space-x-8">
            <button className="group relative px-8 py-3 bg-blue-600 text-white rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <span className="relative z-10">Start Your Plan</span>
              <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </button>
            <button className="group relative px-8 py-3 bg-sky-600 text-white rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <span className="relative z-10">Meet an Advisor</span>
              <div className="absolute inset-0 bg-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </button>
          </div>
        </div>
      </main>

      <footer className="w-full py-4 text-center text-blue-600 bg-white/50">
        <p>© {new Date().getFullYear()} Stanbic. Growing wealth, nurturing life.</p>
      </footer>
    </div>
  );
};

export default App;
