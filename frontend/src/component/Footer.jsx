import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
      <div>
        <img src={assets.logo} className="mb-5 w-32" alt="" />
        <p className="w-full md:w-2/3 text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          vitae, quidem in saepe eius natus! Obcaecati nihil facilis tenetur
          debitis, perspiciatis sapiente itaque repellendus at, ea non officiis
          expedita fugit?
        </p>
      </div>
      <div>
        <p className="text-xl font-medium mb-5">Company</p>
        <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <p className="text-xl font-medium mb-5">Get In Touch</p>
        <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-73558-31146</li>
            <li>Forever@Gmail.com</li>
        </ul>
      </div>
    </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">CopyRight 2024@ forever.com -All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
