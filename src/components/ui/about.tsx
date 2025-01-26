"use client";

import { motion } from "framer-motion";
import React from "react";
const About: React.FC = () => {
 

  return (
    <div className="pt-40   pb-10 mt-40 overflow-x-hidden pl-5 pr-5 lg:px-40 justify-center font-serif"
    // style={{
    //     background:
    //       "linear-gradient(120deg, var(--black), var(--slate-900) ",
    //   }}

      
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex flex-col gap-10 items-center md:flex-row lg:max-w-6xl"
      >
        <img
          className="object-cover rounded-full w-full h-96 md:h-auto md:w-[20rem]"
          src="images/About.avif"
          alt="Ariana"
        />
        <div className="flex flex-col justify-around p-4 leading-normal">
          <h5 className="lg:mb-2 text-black text-3xl text-center lg:text-5xl font-medium playfair-display-regular tracking-tight ">
          
          Spiritual Alignment through Pranic Healing
          </h5>
          <p className="pb-5 italic mt-10 text-md font-serif lg:text-lg text-[#abb23d]">
           ~ I am a natural networker, a true empath & particularly perceptive. I pride myself in being authentic in my connections. My purpose is to help you heal, grow + feel empowered. I am here to assist in raising collective consciousness + compassion.
          </p>
          <p className="mb-3  text-slate-700 font-sans pb-10 flex text-sm lg:text-lg leading-tight [word-spacing:2px]">
  Hi, I am Ariana. With 16+ years of experience in hospitality, I have learned how to navigate challenges, connect with people from all walks of life, and create systems that bring ease and flow to even the most chaotic of times. Along the way, I discovered my passion for another type of service, helping others heal and grow, which led me to become a Certified Pranic Healer and spiritual coach.

  Through energy work, Human Design, tarot, and holistic practices, I help guide others through life&rsquo;s tough moments&mdash;whether it is navigating big emotions, finding clarity in the chaos, or rediscovering your inner strength. I believe healing is deeply personal, but it does not have to be lonely. I am here to walk alongside you and help you align with the life you are meant to live.

  Looking forward to connecting with you.
</p>

          <div className="flex justify-end">
            <img src="images/sign-2.png" className="w-[18rem]" alt="sign"/>
          </div>
     
        </div>
      </motion.div>
    </div>
  );
};

export default About;
