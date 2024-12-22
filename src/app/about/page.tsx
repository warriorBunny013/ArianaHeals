export default function AboutPage() {
    return  <div className="overflow-x-hidden bg-[#dbdf9d]"
    >
   
{/* holistic life coaching */}
<div className=" pt-10 pb-10">
    <h1 className="text-center text-6xl  lg:text-8xl font-serif font-bold">Life Coaching vs. Therapy</h1>
    <div className="mt-10 mx-4 lg:mx-60 text-center playfair-display-regular text-md lg:text-xl">Therapy can be instrumental in identifying root causes of behaviors, validating past feelings & experiences, and paving new neural pathways. I always recommend therapy to identify and address the issues first. Life coaching differs in that we set personal & professional goals and work to create positive change in various aspects of life. </div>
</div>
<div
id="testimonials"
className="pb-40 rounded-t-[5rem] lg:rounded-t-[10rem] text-slate-100"
style={{
    background: "linear-gradient(180deg, var(--black), var(--slate-900))",
  }}
>
<div className="flex flex-col">
<h1 className="text-4xl mb-10 playfair-display-regular text-gray-200 font-medium text-center mt-8">
Holistic Approach Life Coaching
</h1>
{/* <div className="flex justify-center mt-4 mb-6"><img src="/images/arrow.png" className="w-20" alt="arrow"/></div> */}
</div>
<div className="text-gray-300 mb-10 mx-4 lg:mx-80 font-sans text-md lg:text-xl">Life coaches often take a holistic approach, considering all aspects of a person&apos;s life. This may include their values, beliefs, habits, and overall lifestyle. In addition, I studied at the Dharma Coaching Institute where we specialized in a spiritual + Ayurvedic perspective as well. Considering our doshas, dharma + archetypes along with meditation and wellness. The coaching process is centered around the client. It is my goal as a coach to understand your perspective, values, and aspirations, providing support +  guidance tailored to your needs. While we will discuss your history, my coaching style is forward-focused + action-oriented. I am here to help my clients develop actionable plans + strategies to move closer to their goals, encouraging accountability + progress. In addition I use Human Design to better understand each clients unique identity and energetics.

We can go deeper into that as well if you&apos;re interested.

I offer readings for the whole family.</div>
<div className="text-gray-300 mb-10 mx-4 lg:mx-80 font-sans text-md lg:text-xl">A significant aspect of life coaching is empowering clients to make decisions, take responsibility for their actions, and build self-confidence. I am here to help you unlock your potential + overcome limiting beliefs. We will uncover the subconscious thought patterns and reframe them using positive coaching, in which I draw from principles of positive psychology, emphasizing strengths, positive thinking, and solutions rather than dwelling on problems. It is my goal to help clients in developing specific skills or improving existing ones, fostering personal + professional growth. I am here to help you find your inner voice + live the life you want. We will work together to develop life long tools for your evolution in consciousness + journey towards alignment.</div>
<div className="text-gray-300 mb-10 mx-4 lg:mx-80 font-sans text-md lg:text-xl">Effective communication and relationship building are crucial in life coaching. I use active listening, powerful questioning + feedback to facilitate meaningful conversations. Our sessions can take place in person, over the phone, or online, providing flexibility for those with different preferences + busy schedules. Confidentiality is a fundamental principle in life coaching, I maintain a safe + non-judgmental space where clients feel comfortable sharing their thoughts, feelings, and aspirations.

It&apos;s important to note that life coaching is distinct from therapy or counseling. While therapy may focus on addressing past issues and emotional healing, life coaching is forward-looking, concentrating on achieving future goals and personal development. Many of my clients seek my services to gain clarity, overcome obstacle + enhance their overall life satisfaction.</div>

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
   
  </div>;
  }
  