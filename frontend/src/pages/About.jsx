import React from "react";
import Title from "../component/Title";
import NewsLetterBox from "../component/NewsLetterBox";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
            dolor expedita repellat consectetur similique possimus. Sint esse
            nam officiis quasi consequatur ratione ipsam iste quibusdam!
            Laudantium quisquam incidunt repellendus perspiciatis.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            similique numquam excepturi, perspiciatis quos, rem commodi, nobis
            quo debitis exercitationem qui ratione expedita voluptate
            consectetur harum a amet labore doloribus.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            ipsa soluta ut delectus accusantium. Exercitationem temporibus, nam
            ad cupiditate inventore necessitatibus corporis molestiae ut dolores
            veniam, ipsa impedit fugit repellat.
          </p>
        </div>
      </div>
      <div className="text-xl-4 py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col hap-5 ">
          <b> Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas amet
            ipsum eum error labore blanditiis nostrum delectus placeat soluta at
            a adipisci, libero inventore pariatur, voluptas odio natus, eligendi
            nulla!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col hap-5 ">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas amet
            ipsum eum error labore blanditiis nostrum delectus placeat soluta at
            a adipisci, libero inventore pariatur, voluptas odio natus, eligendi
            nulla!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col hap-5 ">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas amet
            ipsum eum error labore blanditiis nostrum delectus placeat soluta at
            a adipisci, libero inventore pariatur, voluptas odio natus, eligendi
            nulla!
          </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default About;
