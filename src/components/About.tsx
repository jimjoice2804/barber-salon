import React, { useEffect, useRef } from "react";

const About = () => {

  return (
    <div>
      <h1 className="absolute z-10 w-full font-serif text-4xl text-center text-[#b88a44] lg:hidden">
        OUR STORY
      </h1>
      <div className="h-fit bg-white m-10 p-10" id="aboutSection">
        <div className="h-fit lg:h-screen bg-white flex flex-col lg:flex-row">
          <div className="w-full h-96 lg:h-auto lg:w-1/2 bg-cover bg-center bg-aboutPageImage"></div>
          <div className="w-full lg:w-1/2 p-10 flex text-center items-center justify-end">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
              adipisci natus voluptas? Optio delectus magni eveniet, sit fugit
              porro quasi aliquid maiores suscipit libero aperiam odio dolorem
              numquam blanditiis debi corporis saepe nemo ipsum commodi dicta
              ullam harum tenetur provident quo? Aperiam ab vero facilis quae
            </p>
          </div>
          <h1 className="absolute z-10 w-full text-center lg:block hidden font-serif text-9xl text-[#b88a44] animate-slide-up">
            OUR STORY
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
