import Image from "next/image";
import React from "react";

const Gallary = () => {
  const images = [
    "https://plus.unsplash.com/premium_photo-1677444398697-d565239637f7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFyYmVyfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhcmJlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1532710093739-9470acff878f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhcmJlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661420297394-a8a9590e93a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJhcmJlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661493935776-a76a3e33dddf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJhcmJlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJhcmJlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661542826770-54fb688db187?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGJhcmJlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1635273051937-a0ddef9573b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGJhcmJlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1568339434343-2a640a1a9946?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGJhcmJlcnxlbnwwfHwwfHx8MA%3D%3D",
  ];

  return (
    <div className="h-fit p-10 " id="gallarySection">
      <div>
        <h1 className="text-[#b88a44] text-center  lg:text-9xl text-3xl p-10 font-serif animate-slide-up">
          GALLARY
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {images.map((image, index) => (
          <div className="lg:w-full m-auto h-60 w-60 lg:h-80 relative" key={index}>
            <Image
              key={index}
              src={image}
              alt="gallary"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallary;
