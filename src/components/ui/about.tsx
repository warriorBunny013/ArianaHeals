"use client";

import { motion } from "framer-motion";

const About: React.FC = () => {
  // Define the type for the URL parameter
  const handleInsta = (url: string): void => {
    window.open(url, "_blank");
  };

  const handleTiktok = (url: string): void => {
    window.open(url, "_blank");
  };

  return (
    <div className="pt-40 pb-10 mt-40 overflow-x-hidden pl-5 pr-5 lg:px-40 justify-center font-serif"
    style={{
        background:
          "linear-gradient(120deg, var(--black), var(--slate-900) ",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex flex-col gap-10 items-center md:flex-row lg:max-w-6xl"
      >
        <img
          className="object-cover w-full h-96 md:h-auto md:w-[20rem]"
          src="images/About.avif"
          alt="Ariana"
        />
        <div className="flex flex-col justify-around p-4 leading-normal">
          <h5 className="lg:mb-2 text-2xl text-center lg:text-4xl font-medium font-serif tracking-tight text-white dark:text-white">
          
Alignment + Self Love Coach
          </h5>
          <p className="pb-5 italic mt-10 text-md font-serif lg:text-lg text-gray-400">
           ~ I am a natural networker,

a true empath

&

 particularly perceptive. <br/>

 

 

I pride myself in being  authentic in my connections. My purpose is to help you grow + feel empowered.

I am here to help raise collective consciousness + awareness.
          </p>
          <p className="mb-3 font-extralight font-serif pb-10 flex text-sm lg:text-lg [word-spacing:2px] text-white">
          Born and raised in San Diego to a Persian father and Mexican-American mother, I grew up embracing diverse cultures and perspectives. My journey began in hospitality, where I helped open five restaurants and earned a degree in Hotel Management from SDSU. After working at the W Hotel Times Square, I co-founded RoseWater Cocktail Co. and later became the operating partner of Botanica, blending art and community through food and cocktails.

Driven by a lifelong passion for helping others, I earned my Coaching Certificate from the Dharma Coaching Institute to empower individuals on their life journeys. I value honesty, growth, and making meaningful connections. In my spare time, I enjoy cooking, yoga, traveling, and spending time with loved ones.
          </p>
          <div className="flex justify-end">
            <img src="images/sign.png" className="w-[18rem]" alt="sign"/>
          </div>
     
        </div>
      </motion.div>
    </div>
  );
};

export default About;
