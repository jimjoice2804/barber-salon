"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Gallary from "@/components/Gallary";
import Services from "@/components/Services";
import "../components/index.css";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useRef } from "react";
import Footer from "@/components/Footer";
import MapComponent from "@/components/MapComponent";

export default function Home() {
  const aboutSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    aboutSectionRef.current = document.getElementById("aboutSection");
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="">
      <div
        id="homeSection"
        className="bg-green-600 h-screen lg:h-[1200px] bg-mainPage bg-center parallax bg-cover flex flex-col justify-center items-center text-white text-5xl font-bold text-center "
      >
        <h1 className="font-thin lg:font-light">- GENTEMEN&apos;S -</h1>
        <h1 className="text-6xl lg:text-9xl font-serif p-5">BARBERSHOP</h1>
        <IoIosArrowDown
          className="text-xl lg:text-8xl font-thin cursor-pointer animate-bounce"
          onClick={() => scrollToSection(aboutSectionRef)}
        />
      </div>
      <About />
      <Services />
      <Gallary />
      <Contact />
      <Footer />
      <MapComponent/>
    </div>
  );
}
