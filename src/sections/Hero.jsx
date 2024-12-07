import { useState } from "react";
import profile from "../../public/assets/avatar4.png";
import hoverProfile from "../../public/assets/avatar3.png";
function Hero() {
  const [image, setImage] = useState(profile);

  // Function to handle mouse enter (change image to hoverProfile)
  const handleMouseEnter = () => {
    setImage(hoverProfile);
  };

  // Function to handle mouse leave (change image back to profile)
  const handleMouseLeave = () => {
    setImage(profile);
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
                Web Developer & Desinger
              </p>
              <p className="mb-4 text-lg">
                I'm a passionate web developer with expertise in <br /> [React ,
                Next.js , Node.js]
              </p>
            </h1>
            <div className="flex space-x-4">
              <a
                href="https://drive.google.com/file/d/1n8hp80fR9YRRxkqZ5hSJvAP20u8E6utv/view?usp=drive_link" // Replace with your actual file path or URL
                download="CV-1.pdf" // Optional: provide a default name for the file
                className="bg-blue-600 text-white px-3 py-2 w-max rounded-md"
              >
                Preview CV
              </a>
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
