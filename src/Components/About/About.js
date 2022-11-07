import React from 'react';
import { Typewriter } from "react-simple-typewriter";

const About = () => {
    return (
        <div className=" bg-gray-200 flex flex-row items-center p-2 w-8/12 mx-auto h-96 mt-48 mb-40 rounded-lg border-2 border-black ">
      <div className="w-3/5 text-right p-6">
        <h1 className="text-4xl font-bold">Fazlay Rabbi</h1>
        <p className="font-bold">
          <Typewriter
            words={[
              "Web Design",
              "Responsive website",
              "HTML and CSS",
              "JavaScript",
              "React with router dom",
              "Graphics Editing",
            ]}
            loop={5}
            cursor
            cursorStyle="<<-"
            typeSpeed={70}
            delaySpeed={1500}
            deleteSpeed={100}
          ></Typewriter>
        </p>

        <p className="text-lg mt-3">
          👀 I’m interested in Web design and devolopment.
          <br />
          🌱 I’m currently learning React,
          <br />
          💞️ I’m looking to collaborate on anythings related.
        </p>
      </div>
      <div className="w-2/5 h-96 rounded-lg overflow-hidden">
        <img
          className="w-full h-full"
          src="https://i.ibb.co/FbwS6LY/FB-IMG-1515761188990.jpg"
          alt="img"
        />
      </div>
    </div>
    );
};

export default About;