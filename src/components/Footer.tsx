import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

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

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="flex justify-center p-10 h-fit gap-10 m-10 font-serif flex-col lg:flex-row">
          <div>
            <h1 className="text-[#b88a44] text-3xl pb-5">SAY HELLO</h1>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@mysite.com</p>
            <div className="hidden pt-5 lg:col-span-4 lg:flex space-x-4 justify-center items-center gap-5 text-xl text-black">
              {socials.map((social) => {
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400"
                  >
                    {social.icon}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h1 className="text-[#b88a44] text-3xl pb-5">OUR ADDRESS</h1>
            <p>500 Terry Francine Street </p>
            <p>San Francisco, CA 94158</p>
          </div>

          <div>
            <h1 className="text-[#b88a44] text-3xl pb-5">OPPENING HOURS</h1>
            <p>Mon - Fri: 7am - 10pm</p>
            <p>Saturday: 8am - 10pm</p>
            <p>Sunday: 8am - 10pm</p>
          </div>
        </div>
        <div>
          <div className="flex lg:hidden justify-center items-center gap-5 pb-10">
            {socials.map((social) => {
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400"
                >
                  {social.icon}
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
