"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { GiBeard } from "react-icons/gi";

const socials = [
  {
    name: "facebook",
    url: "https://www.facebook.com",
    icon: <FaFacebookF />,
  },
  {
    name: "twitter",
    url: "https://www.twitter.com",
    icon: <RiTwitterXFill />,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com",
    icon: <FaInstagram />,
  },
];

const Home = () => {
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   const toggleDropdown = () => {
     setIsDropdownOpen(!isDropdownOpen);
   };

  const homeSectionRef = useRef<HTMLElement | null>(null);
  const aboutSectionRef = useRef<HTMLElement | null>(null);
  const servicesSectionRef = useRef<HTMLElement | null>(null);
  const gallarySectionRef = useRef<HTMLElement | null>(null);
  const contactSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    homeSectionRef.current = document.getElementById("homeSection");
    aboutSectionRef.current = document.getElementById("aboutSection");
    servicesSectionRef.current = document.getElementById("servicesSection");
    gallarySectionRef.current = document.getElementById("gallarySection");
    contactSectionRef.current = document.getElementById("contactSection");
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const AppBarContents = [
    {
      title: "Home",
      ref: homeSectionRef,
    },
    {
      title: "About",
      ref: aboutSectionRef,
    },
    {
      title: "Services",
      ref: servicesSectionRef,
    },
    {
      title: "Gallery",
      ref: gallarySectionRef,
    },
    {
      title: "Contact",
      ref: contactSectionRef,
    },
  ];
 
  return (
    <div className="min-h-20 w-screen bg-[#212121] grid grid-cols-12 bg-opacity-30 items-center justify-center">
      <div className="col-span-10 lg:col-span-4 flex items-center justify-center">
        <button
          className="text-white font-bold py-2 px-4 rounded flex justify-center items-center gap-2"
          onClick={() => scrollToSection(homeSectionRef)}
        >
          <GiBeard className="text-5xl"/> Hair & There
        </button>
      </div>

      <button
        className="relative lg:hidden block text-white "
        onClick={toggleDropdown}
      >
        {/* Conditionally render hamburger icon or X icon */}
        {isDropdownOpen ? (
          // X icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Hamburger icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      <div
        className={`${
          isDropdownOpen ? "block" : "hidden"
        } absolute top-full left-0 w-full flex  flex-col  lg:hidden bg-opacity-70 gap-5 text-white bg-black p-5 `}
      >
        {AppBarContents.map((item) => (
          <button
            key={item.title}
            onClick={() => {
              scrollToSection(item.ref);
              toggleDropdown(); // Close the dropdown after clicking a menu item
            }}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="lg:col-span-4 lg:flex items-center justify-center hidden ">
        {AppBarContents.map((item) => (
          <button
            key={item.title}
            className="hover:text-[#b88a44] text-white font-bold py-2 px-4 rounded"
            onClick={() => scrollToSection(item.ref)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="hidden lg:col-span-4 lg:flex space-x-4 justify-center items-center gap-5 text-xl">
        {socials.map((social) => {
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              {social.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
