"use client";
import { motion } from "framer-motion";
import React from "react";
export const Services: React.FC = () => {
    
    return (
       <div className="flex-wrap font-serif mb-[10rem]">
            <div className="m-5 lg:ml-20 flex mb-[8rem] justify-center text-4xl font-medium tracking-tight text-black">Offerings</div>
            <div
                className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-8 "
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    
                        <motion.div
                            
                            className="rounded overflow-hidden shadow-lg bg-white pb-3 flex flex-col"
                            initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
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
                                    
                                >
                                    Book Now
                                </button>
                                <span className="ml-1 text-black font-bold text-xl">$111</span>
                            </div>
                        </motion.div>

                        <motion.div
                            
                            className="rounded overflow-hidden shadow-lg bg-white pb-3 flex flex-col"
                            initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
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
                                                
                                            >
                                                Book Now
                                            </button>
                                            <span className="ml-1 text-black font-bold text-xl">From $600</span>
                                        </div>
                                    </motion.div>
                                    <motion.div
                            className="rounded overflow-hidden shadow-lg bg-white pb-3 flex flex-col"
                            initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
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
                                                
                                            >
                                                Book Now
                                            </button>
                                            <span className="ml-1 text-black font-bold text-xl">$144</span>
                                        </div>
                                    </motion.div>
                                    <motion.div
                            className="rounded overflow-hidden shadow-lg bg-white pb-3 flex flex-col"
                            initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
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
  
  