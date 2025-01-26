"use client";
import Image from "next/image";
// import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
// import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import About from "@/components/ui/about";
import {Services} from "@/components/ui/services";
import { useRouter } from 'next/navigation';

// import dynamic from "next/dynamic";
// import CardDemo from "@/components/blocks/cards-demo-2";

// const NoSSRTestimonials = dynamic(() => AnimatedTestimonials, { ssr: false });
// const testimonialsData = [
//   {
//     quote: "Ariana's coaching provided a safe, empowering space for me to work through limiting beliefs. I feel more confident and connected to my path than ever before",
//     name: "Emily R",
//     designation: "Marketing Manager",
//     src: "/images/testimonial1.jpg",
//   },
//   {
//     quote: "Working with Ariana has been life-changing! Her insights into Human Design gave me tools I use daily to make better decisions and stay aligned with my purpose. I can't recommend her enough!",
//     name: "Sarah T.",
//     designation: "Wellness Entrepreneur",
//     src: "/images/testimonial2.jpg",
//   },
//   {
//     quote: "Ariana's coaching helped me reframe old thought patterns and focus on actionable steps to grow my business. I appreciate her thoughtful guidance and unique ability to bring out the best in others.",
//     name: "Michael S.",
//     designation: "Freelance Designer",
//     src: "/images/testimonial3.jpg",
//   },
//   {
//     quote: `Hi Ariana - Thank you for providing your life coaching services to me at a time where I probably needed it the most. 
//     The lessons on human design helped me better understand who I am at the core. I learned that as a generator I create energy 
//     around me and attract opportunity from life. My human design also explained why I’m constantly in my head and that the moments 
//     of frustration in my life (there are many) stem from not being my true self. 

//     Through the dharma blueprint, you helped me pinpoint my superpowers by talking through my personal archetypes, what makes me 
//     excited, the mediums I enjoy working through, and the obstacles that have contributed to who I am today. 

//     You created a safe space that allowed me to be open about my fears, stresses, desires, aspirations, pleasures, and much more. 
//     After only a few moments in our first session, I knew I was in a judgement-free zone and that I could be honest. You pushed me 
//     to get out of my comfort zone and try new things. By trying new things, I’m learning what I like and don’t like. I’m also making 
//     an effort to be friendlier and open on a regular basis. I’ve already made a couple of new friends, which I thought was impossible 
//     at this age. Even though I haven’t put together the podcast with my brother yet, I’ve been more open with him, and our 
//     communication is better than it’s ever been. 

//     I loved the dynamic of you working with both my partner Annie and me under separate settings. You had an unbiased glimpse into 
//     our relationship that helped us understand each other in ways we wouldn’t have otherwise been able to. I’m more open with her too, 
//     and although our communication is still a work in progress, it’s getting better by the day. 

//     Thank you again for your time. I’ve put the tools you showed me to good use, and although I have plenty more work to do, I am 
//     definitely seeing and feeling progress. I can’t wait to look back on this experience and reflect on the full effect on how you 
//     shaped my bright future!`,
//     name: "Reza T.",
//     designation: "Client",
//     src: "/images/testimonial4.jpg",
//   },
// ];


// const item = [
//   {
//     quote:
//       "Ariana’s natural ability to connect with others, combined with her authenticity, allows her to deeply understand her clients' needs and provide genuine support.",

//     title: "Empathy and Authenticity",
//   },
//   {
//     quote:
//       "Growing up with diverse cultural influences, Ariana is perceptive to different perspectives, making her adept at helping clients from all walks of life.",

//     title: "Cultural Awareness",
//   },
//   {
//     quote: "Ariana is passionate about growth and self-love. She helps clients evolve by guiding them through their journey of self-discovery and empowering them to recognize their own strengths.",

//     title: "Personal Growth Focus",
//   },
//   {
//     quote:
//       "With over a decade of experience in the hospitality industry, Ariana excels at making others feel seen, heard, and valued, creating a safe and welcoming space for her clients.",
   
//     title: "Experience in Service and Hospitality",
//   },
//   {
//     quote:
//       "Ariana blends her knowledge of yoga, Reiki, and mindfulness practices to facilitate a well-rounded, nurturing experience for her clients.",
   
//     title: "Holistic Approach",
//   },
//   {
//     quote:
//       "She is detail-oriented, considerate, and values honesty, growth, and integrity, ensuring that her clients receive tailored advice that aligns with their personal goals.",
  
//     title: "Attention to Detail and Thoughtfulness",
//   },
//   {
//     quote:
//       "Ariana’s journey from hospitality to life coaching shows her dedication to empowering others, teaching clients how to embrace change, take risks, and live authentically.",
 
//     title: "Supportive Mentor",
//   },
// ];
export default function Home() {
  const router = useRouter();
  return (
    <div className="overflow-x-hidden bg-white"
    // style={{
    //   background: "linear-gradient(180deg, var(--black), var(--slate-900))",
    // }}
    >
      {/* HOME PAGE */}
      <div className="overflow-x-hidden playfair-display-regular"
      >
      

        <div 
        
          className="flex justify-center lg:justify-center bg-black"
          // style={{
          //   background: "linear-gradient(180deg, var(--black), var(--slate-900))",
          // }}
          
        >
       
          
          <div className="navbar-center hidden playfair-display-regular text-slate-100 mt-8 lg:flex">
            <ul className="menu menu-horizontal flex gap-10 text-lg font-extralight px-1">
              <li><a href="#about" 
              // onClick={() => navigateTo('about')} 
              className="block py-2 px-4 hover:rounded-sm hover:duration-100 font-sans hover:bg-slate-900">About Ariana</a></li>
              <li><a href="#lifecoaching" 
              // onClick={() => navigateTo('services')} 
              className="block py-2 px-4 hover:rounded-sm hover:duration-100 font-sans hover:bg-slate-900">My Method</a></li>
                
         
            </ul>
            
          </div>
          <div className="flex mx-10 justify-center">
              <img src='/images/logoAriana.avif' className="w-[8rem] " alt='logo'/>
            </div>
            <div className="navbar-center hidden playfair-display-regular text-slate-100 mt-8 lg:flex">
            <ul className="menu menu-horizontal flex gap-10 text-lg font-extralight px-1">
              
                <li><a 
                href="#services" 
              // onClick={() => navigateTo('services')} 
              className="block py-2 px-4 hover:rounded-sm hover:duration-100 font-sans hover:bg-slate-900">Offerings</a></li>

              <li><a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=arianasadre@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              // onClick={() => navigateTo('testimonials')} 
              className="block py-2 px-4 hover:rounded-sm hover:duration-100 font-sans hover:bg-slate-900">Contact</a></li>
            </ul>
            
          </div>
        </div>

        {/* HERO SECTION STARTS FROM HERE!! */}
        <div className="container mx-auto flex mt-10 flex-wrap md:flex-nowrap pl-10 pr-10  justify-center ">
          <div className='pt-1 lg:pt-20 lg:pr-[10rem] lg:flex-col justify-center'>
            
            <div 
              className='playfair-display-regular text-black mr-10 font-medium text-5xl leading-30 xl:text-6xl mb-4 '
            >
              Ready to <span className=' text-[#abb23d] rounded-top-xl'>Unlock</span><br/> Your True Potential?
            </div>
            <div 
              className=' lg:w-[65vh] my-3 hidden md:flex pr-10 md:pr-0 text-sm lg:text-lg font-sans text-gray-700'
            >
            &quot; Spiritual alignment through prana healing & coaching, human design enthusiast, and into all things mystical &quot;
            </div>
            <div className="flex flex-wrap justify-between max-w-[19rem] mt-2 mb-8">
             
              <div className="flex flex-col justify-end"> 
            <a 
            href="#services" 
       
            
            className=" mt-5 md:mt-0 bg-black rounded-md font-normal text-sm lg:text-lg px-10 text-white playfair-display-regular py-4 cursor-pointer ease-in hover:bg-gray-900 "
            style={{
              background:
                "linear-gradient(180deg, var(--black), var(--slate-900) ",
            }}
            > 
          Explore Services

        
          </a></div>
            <div> <img src='/images/arrow.png' className="w-[4rem] hidden md:flex pb-6" alt='arrow'/></div>
            
            </div>
           
          
          </div>
       
          <div className='w-[77vh]'>
            <img src='/images/Ariana.avif' className="rounded-full mt-5 lg:mt-0" alt='hero'/>
              
          </div>
       
        </div>
      </div>


      {/* ABOUT ME */}
      <div id="about">
      <About/>
      </div>
      
 
      <div id="lifecoaching" className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-lg lg:text-3xl font-serif font-medium text-[#abb23d] ">
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
<div
  id="testimonials"
  className="pb-40   text-slate-100"
>
  <div className="flex flex-col">
  <h1 className="text-4xl playfair-display-regular text-black font-medium text-center mt-8">
    What People Are Saying
  </h1>
  <div className="flex justify-center mt-4 mb-6"><img src="/images/arrow.png" className="w-20" alt="arrow"/></div>
  </div>
  
  <div className="flex flex-wrap md:flex-nowrap gap-10 pb-20 px-8 sm:px-20 lg:px-60">
    {/* Testimonial 1 */}
    <div className="border w-[40rem] rounded-md shadow-lg bg-green-950 text-lg text-gray-200 playfair-display-regular p-8 sm:p-10"
     style={{
      background: "linear-gradient(180deg, var(--black), var(--slate-900))",
    }}
    >
      <div className="flex items-center mb-2">
        <span className="text-yellow-400 text-xl">★★★★★</span>
      </div>
      <div>
        “Ariana&apos;s life coaching and lessons on human design helped me understand my core self. Her guidance created a safe space for open discussions, improving my relationships, communication, and self-awareness. I now feel empowered to navigate life authentically, and the progress I&apos;ve made is incredible.”
      </div>
      <div className="flex justify-end mt-4">
        <div className="font-bold text-md sm:text-lg font-serif">~ Reza T.</div>
      </div>
    </div>
    {/* Testimonial 2 */}
    <div className="border w-[40rem] rounded-md shadow-lg bg-green-950 text-lg text-gray-200 playfair-display-regular p-8 sm:p-10"
     style={{
      background: "linear-gradient(180deg, var(--black), var(--slate-900))",
    }}
    >
      <div className="flex items-center mb-2">
        <span className="text-yellow-400 text-xl">★★★★★</span>
      </div>
      <div>
        “Ariana&apos;s insights into human design gave me clarity about my strengths and how to navigate life in alignment with my nature. Her support built my confidence to follow my unique path. I&apos;ve seen incredible changes and love sharing her wisdom with friends and family.”
      </div>
      <div className="flex justify-end mt-4">
        <div className="font-bold text-md sm:text-lg font-serif">~ Annie</div>
      </div>
    </div>

  </div>
  <div className="flex justify-center pb-20 px-8 sm:px-20 lg:px-60"> <div className="border w-[40rem] rounded-md shadow-lg bg-green-950 text-lg text-gray-200 playfair-display-regular p-8 sm:p-10"
     style={{
      background: "linear-gradient(180deg, var(--black), var(--slate-900))",
    }}
    >
      <div className="flex items-center mb-2">
        <span className="text-yellow-400 text-xl">★★★★★</span>
      </div>
      <div>
        “Honestly I&apos;ve had several people just randomly at the bar not anyone I knew comment on my energy. It was just all very positive comments on how I was presenting myself energetically. I think there&apos;s definitely been so much healing and improvement. 
        I do feel that personally as well. It&apos;s just cool now to have outside unbiased eyes commenting on it. You know kind of like confirmation on what I&apos;m feeling internally is actually like. They don&apos;t even know what&apos;s happening, but they&apos;re commenting on it as well so that was really super cool. I continue to feel lighter and. My attachment loosening for sure on my ex.”
      </div>
      <div className="flex justify-end mt-4">
        <div className="font-bold text-md sm:text-lg font-serif">~ Joy</div>
      </div>
    </div></div>
</div>

{/* BLOG */}
<div className="flex flex-col-reverse lg:flex-row flex-wrap lg:flex-nowrap gap-4 justify-between mx-10 lg:mx-40 mb-40">
<div className="rounded overflow-hidden max-w-[40rem] border-2 bg-lime-50 pb-3 playfair-display-regular flex flex-col">
                                        <div className="relative">
                                            <img className="w-full" src="images/blog.jpg" alt="services" />
                                            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                                        </div>
                                        <div className="px-6 py-4 mb-auto">
                                            <div className="text-2xl font-bold text-gray-900 hover:text-indigo-600 cursor-pointer transition duration-500 ease-in-out inline-block mb-2">Understand Life coaching v/s Therapy</div>
                                            <p className="text-gray-700 [word-spacing:2px] text-md playfair-display-regular">2 min read</p>
                                        </div>
                                        <div className="px-6 py-3 flex flex-row items-center justify-between">
                                            <button
                                                className="ml-1 bg-black py-2 px-4 text-white "
                                                onClick={() => router.push('/about')}
                                            >
                                                Read here
                                            </button>
                                            {/* <span className="ml-1 text-black font-bold text-xl"></span> */}
                                        </div>
</div>
<div className="lg:ml-4 "> 
  <h1 className="text-6xl lg:text-8xl playfair-display-semibold">Read</h1>
  <h1 className="text-6xl lg:text-8xl playfair-display-semibold">My approach</h1>
  <h1 className="text-6xl lg:text-8xl playfair-display-semibold">In more</h1>
  <h1 className="text-5xl lg:text-7xl playfair-display-semibold">Detail</h1>
  <img className="w-20 hidden lg:flex" src="/images/arrow.png" alt="arrow"/>
  <img className="w-20 flex ml-10 lg:hidden" src="/images/arrow-right.png" alt="arrow"/>
  </div>

</div>
{/* <div>
        <img className="bg-contain" src="images/image.jpeg" alt="image"/>
        
        </div> */}

           
      <div className="relative bg-gray-900 playfair-dispair-regular text-white">
  {/* Heading Section */}
  <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 p-6 text-center">
    <div className="text-7xl playfair-display-regular text-white mb-2">Still here?</div>
  <div 
              className='playfair-display-regular text-slate-300 mr-10 text-xl lg:text-3xl leading-30  mb-4 '
            >
            Don&apos;t wait—book your appointment and start your journey to healing!
            </div>
    <a 
            href="#services" 
       
            
            className=" mt-5 md:mt-0 bg-black rounded-md font-normal text-sm lg:text-lg px-10 text-white playfair-display-regular py-4 cursor-pointer ease-in hover:bg-gray-900 "
            style={{
              background:
                "linear-gradient(180deg, var(--black), var(--slate-900) ",
            }}
            > 
          Explore Services

        
          </a>
  </div>

  {/* Image Section */}
  <div>
    <img
      src="images/image.jpeg"
      className="w-full h-[400px] lg:h-[600px] object-cover"
      alt="Ariana's Services"
    />
  </div>
</div>

      {/* FOOTER */}

      <footer 
      className="pt-10 bg-green-950"
       style={{
        background:
          "linear-gradient(180deg, var(--black), var(--slate-900) ",
      }}
      >
          <div className='w-full  mx-auto max-w-screen-xl p-4 md:flex gap-3 md:items-center md:justify-between'>
            <div className='max-w-1/2 mb-10 text-sm text-gray-300'>
              <span className='font-bold '>Disclaimer:</span> The life coaching services provided by Ariana Sadre, Holistic Life Coach, are designed to guide and support personal growth, alignment, and well-being. These services are not a substitute for medical, psychological, or professional advice. Results may vary, and all actions taken based on coaching sessions are the client&apos;s responsibility. Always consult appropriate professionals for health, legal, or financial concerns.
            </div>
          </div>
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex gap-3 md:items-center md:justify-between">
          <span className="text-sm text-gray-400">© 2024, Ariana Sadre | <span className="hover:underline"></span> All Rights Reserved.</span>
              <ul className="md:flex hidden text-sm md:ml-auto items-center text-white">
                <li><a href="#about" 
                // onClick={() => navigateTo('about')} 
                className="hover:underline me-4 cursor-pointer md:me-6 block py-2 px-4 text-white">About</a></li>
                <li><a 
               href="https://mail.google.com/mail/?view=cm&fs=1&to=arianasadre@gmail.com"
               target="_blank"
               rel="noopener noreferrer"
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
