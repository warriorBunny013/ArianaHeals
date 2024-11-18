import Image from "next/image";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import About from "@/components/ui/about";
import {Services} from "@/components/ui/services";

// import dynamic from "next/dynamic";
// import CardDemo from "@/components/blocks/cards-demo-2";

// const NoSSRTestimonials = dynamic(() => AnimatedTestimonials, { ssr: false });
const testimonialsData = [
  {
    quote: "Ariana's coaching provided a safe, empowering space for me to work through limiting beliefs. I feel more confident and connected to my path than ever before",
    name: "Emily R",
    designation: "Marketing Manager",
    src: "/images/testimonial1.jpg",
  },
  {
    quote: "Working with Ariana has been life-changing! Her insights into Human Design gave me tools I use daily to make better decisions and stay aligned with my purpose. I can't recommend her enough!",
    name: "Sarah T.",
    designation: "Wellness Entrepreneur",
    src: "/images/testimonial2.jpg",
  },
  {
    quote: "Ariana's coaching helped me reframe old thought patterns and focus on actionable steps to grow my business. I appreciate her thoughtful guidance and unique ability to bring out the best in others.",
    name: "Michael S.",
    designation: "Freelance Designer",
    src: "/images/testimonial3.jpg",
  },
];

const item = [
  {
    quote:
      "Ariana’s natural ability to connect with others, combined with her authenticity, allows her to deeply understand her clients' needs and provide genuine support.",

    title: "Empathy and Authenticity",
  },
  {
    quote:
      "Growing up with diverse cultural influences, Ariana is perceptive to different perspectives, making her adept at helping clients from all walks of life.",

    title: "Cultural Awareness",
  },
  {
    quote: "Ariana is passionate about growth and self-love. She helps clients evolve by guiding them through their journey of self-discovery and empowering them to recognize their own strengths.",

    title: "Personal Growth Focus",
  },
  {
    quote:
      "With over a decade of experience in the hospitality industry, Ariana excels at making others feel seen, heard, and valued, creating a safe and welcoming space for her clients.",
   
    title: "Experience in Service and Hospitality",
  },
  {
    quote:
      "Ariana blends her knowledge of yoga, Reiki, and mindfulness practices to facilitate a well-rounded, nurturing experience for her clients.",
   
    title: "Holistic Approach",
  },
  {
    quote:
      "She is detail-oriented, considerate, and values honesty, growth, and integrity, ensuring that her clients receive tailored advice that aligns with their personal goals.",
  
    title: "Attention to Detail and Thoughtfulness",
  },
  {
    quote:
      "Ariana’s journey from hospitality to life coaching shows her dedication to empowering others, teaching clients how to embrace change, take risks, and live authentically.",
 
    title: "Supportive Mentor",
  },
];
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* HOME PAGE */}
      <div className="overflow-x-hidden font-serif"
      >
      

        <div 
        
          className="flex justify-center lg:justify-between "
          style={{
            background:
              "linear-gradient(180deg, var(--black), var(--slate-900) ",
          }}
        >
          <div className="lg:ml-20 flex justify-center">
              <img src='/images/logoAriana.avif' className="w-[6rem] py-2" alt='logo'/>
            </div>
          
          <div className="navbar-center hidden font-serif text-white mt-8 lg:flex">
            <ul className="menu menu-horizontal flex mr-10 text-md font-extralight px-1">
              <li><a href="#about" 
              // onClick={() => navigateTo('about')} 
              className="block py-2 px-4 hover:rounded-sm hover:duration-100 hover:bg-slate-900">About me</a></li>
              <li><a href="#services" 
              // onClick={() => navigateTo('services')} 
              className="block py-2 px-4 hover:rounded-sm hover:duration-100 hover:bg-slate-900">Services</a></li>
                <li><a href="#lifecoaching" 
              // onClick={() => navigateTo('services')} 
              className="block py-2 px-4 hover:rounded-sm hover:duration-100 hover:bg-slate-900">Life Coaching</a></li>
              <li><a href="#testimonials" 
              // onClick={() => navigateTo('testimonials')} 
              className="block py-2 px-4 hover:rounded-sm hover:duration-100 hover:bg-slate-900">Testimonials</a></li>
              <li><a href="#contact" 
              // onClick={() => navigateTo('testimonials')} 
              className="block py-2 px-4 hover:rounded-sm hover:duration-100 hover:bg-slate-900">Contact</a></li>
            </ul>
          </div>
          {/* <div className="navbar-start">
            <button onClick={toggleMenu} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
           
          </div> */}
   
 
     {/* <div className="navbar-end hidden lg:flex mr-10">
            <a href="mailto:uditi013@gmail.com" onClick={handleContactClick} className="btn border-0 text-white font-serif font-extralight">Contact me</a>
          </div> */}
        </div>

        {/* Fullscreen Slider Menu */}
        {/* <div className={`fixed top-0 right-0 h-full w-full transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-black text-3xl">
              &times;
            </button>
          </div>
          <ul className="flex flex-col items-center justify-center h-full font-serif text-black text-2xl">
            <li className="my-4"><a href="#about" onClick={() => navigateTo('about')} className="block py-2">About me</a></li>
            <li className="my-4"><a href="#services" onClick={() => navigateTo('services')} className="block py-2">Services</a></li>
            <li className="my-4"><a href="#testimonials" onClick={() => navigateTo('testimonials')} className="block py-2">Testimonials</a></li>
          </ul>
        </div> */}
        {/* <div className="bg-[#dbe47c] flex  justify-center md:hidden">
              <img src='logo.png' className='w-[12rem] pb-6' alt='logo'/>
            </div> */}
        {/* HERO SECTION STARTS FROM HERE!! */}
        <div className="container mx-auto flex mt-10 flex-wrap md:flex-nowrap pl-10 pr-10  justify-center ">
          <div className='pt-1 lg:pt-20 lg:pr-[10rem] lg:flex-col justify-center'>
            
            <div 
              className='font-serif text-black mr-10 font-medium text-4xl leading-10 xl:text-5xl mb-4 '
            >
              Ready to <span className=' text-green-600 rounded-top-xl'>Unlock</span><br/> Your True Potential?
            </div>
            <div 
              className=' lg:w-[65vh] pr-10 md:pr-0 text-sm lg:text-lg font-serif text-gray-600'
            >
            &quot; Spiritual alignment through prana healing & coaching, human design enthusiast, and into all things mystical &quot;
            </div>
            <div className="flex justify-end mt-2 mb-8">
            <div 
              className='rubik-wet-paint-regular text-sm lg:text-md italic mb-2 '
            >
              ~ Ariana Sadre
            </div>
            </div>
            
            <a 
            href="#services" 
            // onClick={() => navigateTo('newsletter')} 
            
            className=" shadow-black hover:scale-150 shadow-2xl bg-black rounded-md font-normal text-sm lg:text-lg px-10 text-white font-serif mb-10 py-4 cursor-pointer ease-in hover:bg-gray-900 "
            style={{
              background:
                "linear-gradient(180deg, var(--black), var(--slate-900) ",
            }}
            > 
          Explore Services

        
          </a>
          
          </div>
          {/* <picture> */}
          <div className='w-[77vh]'>
            <img src='/images/Ariana.avif' className="rounded-full mt-10 lg:mt-0" alt='hero'/>
              
          </div>
          {/* </picture> */}
        </div>
      </div>
      <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={item} direction="right"
        speed="slow"/>
      </div>

      {/* ABOUT ME */}
      <div id="about">
      <About/>
      </div>
      
 
      <div id="lifecoaching" className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-lg lg:text-3xl font-serif font-medium text-gray-700 dark:text-white">
            Life coaching vs Therapy <br />
              <span className="text-4xl md:text-[6rem] text-black font-bold mt-1 leading-none">
              Holistic Approach Life Coaching 
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/images/approach2.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>

    {/* SERVICES */}
    <div id="services" className="">
      <Services/>

    </div>
      {/* TESTIMONIALS */}
      <div id="testimonials" className=" pt-20 border-b border-gray-600 text-white"
       style={{
        background:
          "linear-gradient(120deg, var(--black), var(--slate-900) ",
      }}
      >
      <h1 className="text-4xl font-serif font-medium text-center my-8">
        What People Are Saying
      </h1>
      <AnimatedTestimonials testimonials={testimonialsData} autoplay={true} />
      </div>

      {/* FOOTER */}

      <footer 
      className="pt-10"
       style={{
        background:
          "linear-gradient(180deg, var(--black), var(--slate-900) ",
      }}>
          <div className='w-full  mx-auto max-w-screen-xl p-4 md:flex gap-3 md:items-center md:justify-between'>
            <div className='max-w-1/2 mb-10 text-sm text-gray-300'>
              <span className='font-bold'>Disclaimer:</span> The life coaching services provided by Ariana Sadre, Holistic Life Coach, are designed to guide and support personal growth, alignment, and well-being. These services are not a substitute for medical, psychological, or professional advice. Results may vary, and all actions taken based on coaching sessions are the client&apos;s responsibility. Always consult appropriate professionals for health, legal, or financial concerns.
            </div>
          </div>
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex gap-3 md:items-center md:justify-between">
          <span className="text-sm text-gray-400">© 2024, Ariana Sadre | <span className="hover:underline"></span> All Rights Reserved.</span>
              <ul className="md:flex hidden text-sm md:ml-auto items-center text-white">
                <li><a href="#about" 
                // onClick={() => navigateTo('about')} 
                className="hover:underline me-4 cursor-pointer md:me-6 block py-2 px-4 text-white">About</a></li>
                <li><a href="mailto:uditi013@gmail.com" 
                // onClick={handleContactClick} 
                className="hover:underline me-4 cursor-pointer md:me-6 block py-2 px-4 text-white">Contact</a></li>
                <li><a href="#services" 
                // onClick={() => navigateTo('services')} 
                className="hover:underline me-4 cursor-pointer md:me-6 block py-2 px-4 text-white">Services</a></li>
                <li><a href="#testimonials" 
                // onClick={() => navigateTo('testimonials')} 
                className="hover:underline me-4 cursor-pointer md:me-6 block py-2 px-4 text-white">Testimonials</a></li>
              </ul>
            
          </div>
          <div className="text-sm text-gray-300 pb-10 flex justify-center">
  &#9734; Designed and Developed by{' '}
  <a href="https://linktr.ee/UditiDas" target="_blank" rel="noopener noreferrer"  className="ml-1 underline">
    Uditi Das
  </a>
</div>

        </footer>
     
    </div>
  );
}
