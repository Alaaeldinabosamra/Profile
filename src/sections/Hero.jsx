import { useState } from "react";
import profile from "../../public/assets/avatar4.png";
import hoverProfile from "../../public/assets/avatar3.png";
function Hero() {
  const [image, setImage] = useState(profile);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle dropdown visibility

  // Function to handle mouse enter (change image to hoverProfile)
  const handleMouseEnter = () => {
    setImage(hoverProfile);
  };

  // Function to handle mouse leave (change image back to profile)
  const handleMouseLeave = () => {
    setImage(profile);
  };

  // Function to handle CV download based on type
  const handleCVDownload = (cvType) => {
    if (cvType === "frontend") {
      // CV for Frontend
      window.open(
        "https://drive.google.com/file/d/1PY-cj38hAPv7ABJCjptIVxe7wmRgjIJF/view?usp=sharing",
        "_blank"
      );
    } else if (cvType === "backend") {
      // CV for Backend
      window.open(
        "https://drive.google.com/file/d/1bjlpAlIvVu-BQMMEbvYUfhxxLkGhXy34/view?usp=sharing",
        "_blank"
      );
    }
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <section className="c-space mt-20 relative" id="home">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[80vh] justify-between ">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            <h1 className="head-text">
              HI There, <br /> I'm Alaaeldin{" "}
              <span className="text-blue-500">Abousamra</span>
              <p className="md:text-2xl text-xl mb-4">
                Web Developer & Designer
              </p>
              <p className="mb-4 text-lg">
                I'm a passionate web developer with expertise in <br /> [React ,
                Next.js , Node.js]
              </p>
            </h1>
            <div className="flex space-x-4">
              {/* Dropdown Button for CV */}
              <div className="relative">
                <button
                  onClick={toggleDropdown} // Toggle dropdown visibility on click
                  className="bg-blue-600 text-white w-36 px-4 py-2 rounded-md"
                >
                  Download CV
                </button>
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute mt-2 right-0 w-36 bg-black shadow-lg rounded-md z-10">
                    <button
                      onClick={() => handleCVDownload("frontend")}
                      className="block w-full text-center px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md"
                    >
                      Frontend CV
                    </button>
                    <button
                      onClick={() => handleCVDownload("backend")}
                      className="block w-full text-center px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md mt-2"
                    >
                      Backend CV
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className="md:w-1/2 h-full relative flex justify-center items-end"
            onMouseEnter={handleMouseEnter} // Trigger hover effect
            onMouseLeave={handleMouseLeave} // Revert to the original image
          >
            <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black to-transparent"></div>
            <img
              src={image}
              alt="Profile"
              className="transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
        <div className="w-full h-[10vh] bg-black"></div>
      </div>
    </section>
  );
}

export default Hero;
