import { useState } from "react";
import { images } from "./constants";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track the active panel

  const handlePanelClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle active panel
  };

  return (
    <main className="relative max-container flex items-center content-center h-lvh overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative bg-cover bg-center bg-no-repeat h-[80vh] m-2.5 cursor-pointer rounded-3xl transition-[flex] duration-700 ease-in ${
            activeIndex === index ? "flex-[5]" : "flex-[0.5]"
          }`}
          style={{ backgroundImage: `url('${image.imgURL}')` }}
          onClick={() => handlePanelClick(index)}
        >
          <h3
            className={`font-muli text-2xl text-white bottom-5 left-5 m-0 absolute transition-opacity duration-300 ease-in delay-400 ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {image.thumbnail}
          </h3>
        </div>
      ))}
    </main>
  );
};

export default App;
