"use client";
import { motion } from "framer-motion";
import React from "react";
export const Services: React.FC = () => {
    
    return (
       <div className="flex-wrap playfair-display-regular mb-[10rem]">
            <div className="m-5 lg:ml-20 flex mb-[8rem] justify-center text-4xl font-medium tracking-tight text-black">Offerings</div>
            <div
                className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-8 "
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                <motion.div
                            
                            className="rounded overflow-hidden border border-slate-400 bg-amber-50 pb-3 flex flex-col"
                            initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{  ease: "easeInOut" }}
                        >
                            <div className="relative">
                                <img className="w-full" src="images/service5.jpg" alt="services" />
                                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                </div>
                            </div>
                            <div className="px-6 py-4 mb-auto">
                                <div className="text-lg text-[1.3rem] font-bold text-gray-900 hover:text-indigo-600 cursor-pointer transition duration-500 ease-in-out inline-block mb-2">Free Discovery Call</div>
                                <p className="text-gray-700 [word-spacing:2px] text-md">30 min</p>
                            </div>
                            <div className="px-6 py-3 flex flex-row items-center justify-between">
                                <button
                                    className="ml-1 py-2 px-4   text-white"
                                    style={{
                                        background:
                                          "linear-gradient(120deg, var(--black), var(--slate-900) ",
                                          
                                      }}

                                     onClick={() => window.location.href = "https://cal.com/ariana-sadre-hjk6tc/exploratory"}
                                >
                                    Book Now
                                </button>
                                <span className="ml-1 text-black font-bold text-xl">Free</span>
                            </div>
                        </motion.div>
                        <motion.div
                            className="rounded overflow-hidden border border-slate-400 bg-yellow-50 pb-3 flex flex-col"
                            initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{  ease: "easeInOut" }}
                                    >
                                        <div className="relative">
                                            <img className="w-full" src="images/service4.jpg" alt="services" />
                                            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                                        </div>
                                        <div className="px-6 py-4 mb-auto">
                                            <div className="text-lg text-[1.3rem] font-bold text-gray-900 hover:text-indigo-600 cursor-pointer transition duration-500 ease-in-out inline-block mb-2">Pranic Healing</div>
                                            <p className="text-gray-700 [word-spacing:2px] text-md">1 hr</p>
                                        </div>
                                        <div className="px-6 py-3 flex flex-row items-center justify-between">
                                            <button
                                                className="ml-1 bg-black py-2 px-4 text-white "
                                                onClick={() => window.location.href = "https://cal.com/ariana-sadre-hjk6tc/healingsession"}
                                            >
                                                Book Now
                                            </button>
                                            <span className="ml-1 text-black font-bold text-xl">$88 per session</span>
                                        </div>
                                    </motion.div>
                    
                        <motion.div
                            
                            className="rounded overflow-hidden border border-slate-400 bg-violet-50 pb-3 flex flex-col"
                            initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut" }}
                        >
                            <div className="relative">
                                <img className="w-full" src="images/service1.jpg" alt="services" />
                                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                </div>
                            </div>
                            <div className="px-6 py-4 mb-auto">
                                <div className="text-lg text-[1.3rem] font-bold text-gray-900 hover:text-indigo-600 cursor-pointer transition duration-500 ease-in-out inline-block mb-2">Spiritual Alignment Session</div>
                                <p className="text-gray-700 [word-spacing:2px] text-md">1 hr 30 min</p>
                            </div>
                            <div className="px-6 py-3 flex flex-row items-center justify-between">
                                <button
                                    className="ml-1 py-2 px-4   text-white"
                                    style={{
                                        background:
                                          "linear-gradient(120deg, var(--black), var(--slate-900) ",
                                          
                                      }}
                                      onClick={() => window.location.href = "https://cal.com/ariana-sadre-hjk6tc/spiritual-alignment-session"}
                                    
                                >
                                    Book Now
                                </button>
                                <span className="ml-1 text-black font-bold text-xl">$111</span>
                            </div>
                        </motion.div>

                        <motion.div
                            
                            className="rounded overflow-hidden border border-slate-400 bg-blue-50 pb-3 flex flex-col"
                            initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{  ease: "easeInOut" }}
                                    >
                                        <div className="relative">
                                            <img className="w-full" src="images/service2.jpg" alt="services" />
                                            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                                        </div>
                                        <div className="px-6 py-4 mb-auto">
                                            <div className="text-lg text-[1.3rem] font-bold text-gray-900 hover:text-indigo-600 cursor-pointer transition duration-500 ease-in-out inline-block mb-2">6 or 12 Sessions</div>
                                            <p className="text-gray-700 [word-spacing:2px] text-md">1 hr</p>
                                        </div>
                                        <div className="px-6 py-3 flex flex-row items-center justify-between">
                                            <button
                                                className="ml-1 bg-black py-2 px-4 text-white"
                                                onClick={() => window.location.href = "https://cal.com/ariana-sadre-hjk6tc/six-to-twelve-sessions"}
                                    
                                            >
                                                Book Now
                                            </button>
                                            <span className="ml-1 text-black font-bold text-xl">From $600</span>
                                        </div>
                                    </motion.div>
                                    <motion.div
                            className="rounded overflow-hidden border border-slate-400 bg-red-50 pb-3 flex flex-col"
                            initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{  ease: "easeInOut" }}
                                    >
                                        <div className="relative">
                                            <img className="w-full" src="images/service3.jpg" alt="services" />
                                            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                                        </div>
                                        <div className="px-6 py-4 mb-auto">
                                            <div className="text-lg text-[1.3rem] font-bold text-gray-900 hover:text-indigo-600 cursor-pointer transition duration-500 ease-in-out inline-block mb-2">Introduction to Human Design</div>
                                            <p className="text-gray-700 [word-spacing:2px] text-md">1 hr 30 min</p>
                                        </div>
                                        <div className="px-6 py-3 flex flex-row items-center justify-between">
                                            <button
                                                className="ml-1 bg-black py-2 px-4 text-white "
                                                onClick={() => window.location.href = "https://cal.com/ariana-sadre-hjk6tc/human-design-reading"}
                                    
                                            >
                                                Book Now
                                            </button>
                                            <span className="ml-1 text-black font-bold text-xl">$144</span>
                                        </div>
                                    </motion.div>
                                  
                                    
                    
                </div>
            </div>
            </div>

    );
  };
  
  