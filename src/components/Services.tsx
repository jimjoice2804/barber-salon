import React from 'react'

const Services = () => {

  const servicesList = [
    {
      serviceName: "Signature Haircut",
      price: 25,
    },
    {
      serviceName: "Haircut",
      price: 20,
    },
    {
      serviceName: "Beard Shaving",
      price: 15,
    },
    {
      serviceName: "Beard Trimming",
      price: 15,
    },
    {
      serviceName: "Cut & Shave",
      price: 30,
    },
    {
      serviceName: "Deep Tissue Shave",
      price: 22,
    },
    {
      serviceName: "Eye Brow Threading",
      price: 10,
    },
  ];

  return (
    <div
      className="h-fit bg-cover bg-serviceImage bg-center p-5"
      id="servicesSection"
    >
      <div>
        <h1 className="text-3xl lg:text-8xl text-white text-center p-5 font-serif animate-slide-up">
          SERVICES
        </h1>
      </div>
      <div className="p-16">
        {servicesList.map((service, index) => (
          <div
            key={index}
            className=" m-10 p-3 flex items-baseline justify-between border-b-2 border-white text-white font-serif "
          >
            <h1 className="text-lg lg:text-3xl text-center ">
              {service.serviceName}
            </h1>
            <h1 className="text-lg lg:text-2xl text-center  ">
              ${service.price}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services