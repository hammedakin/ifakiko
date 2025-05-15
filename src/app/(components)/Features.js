import React from 'react';
import { FaHeadphones, FaMicrophone, FaStore, FaSitemap, FaUser, FaBook } from "react-icons/fa";

const Features = () => {
      return (
            <section className="bg-primary py-20 font-josefin-sans text-white">
                  <div className="margins">
                        <div className="mb-12 text-center">
                              <h2 className="font-bold text-2xl md:text-3xl">
                                    APP FEATURES
                              </h2>
                        </div>

                        <div className="flex flex-col items-center gap-4 mx-auto mb-12 max-w-2xl text-center">
                              <FaHeadphones className="text-2xl" />
                              <h2 className="font-semibold text-lg tracking-wide">AUDIO-VISUAL VERSE LEARNING</h2>
                              <p className="font-normal text-sm">
                                    Engage with authentic Ifá verses through high-quality video and audio recordings<br className="hidden md:block" /> from verified Babaláwo (priests).
                              </p>
                        </div>


                        <div className="relative gap-x-0 gap-y-10 grid grid-cols-1 md:grid-cols-3 mx-auto w-full max-w-6xl">
                              {/* Left column */}
                              <div className="flex flex-col items-center md:items-end gap-10 md:gap-48 text-center md:text-right">

                                    <Feature
                                          icon={<FaBook className='mb-6' />}
                                          position='md:justify-end'
                                          title='INTERACTIVE VERSE LIBRARY'
                                          text='   Browse a categorized verse archive, organized by Odu, theme, or spiritual purpose.'

                                    />

                                    <Feature
                                          icon={<FaUser className='mb-6' />}
                                          position='md:justify-end'
                                          title='PRIEST PROFILES & COMMUNITY HUB'
                                          text='   Users can follow verified Babaláwo, view their teachings, and ask spiritually questions.'

                                    />
                              </div>

                              {/* Center green rectangle */}
                              <div className="hidden md:block">

                                    <div className="flex justify-center items-center">
                                          <div className="bg-secondary-100 rounded-3xl w-44 md:w-48 h-96 md:h-[540px] lg:h-[450px]"></div>
                                    </div>

                              </div>
                              {/* Right column */}
                              <div className="flex flex-col items-center md:items-start gap-10 md:gap-48 md:text-left text-center">
                                    <div className="max-w-xs">

                                          <Feature
                                                icon={<FaMicrophone className='mb-6' />}
                                                position='md:justify-start'
                                                title='YORUBA PRONUNCIATION COACH'
                                                text='   Practice chanting with built-in AI that guides you in mastering tone and delivery—perfect for beginners.'

                                          />
                                    </div>

                                    <div className="max-w-xs">
                                          <Feature
                                                icon={<FaSitemap className='mb-6' />}
                                                position='md:justify-start'
                                                title='LINEAGE TRACING & IBÀ SYSTEM'
                                                text=' Each verse is spiritually anchored. Users can view the originating lineage of verses.'

                                          />

                                    </div>
                              </div>
                        </div>

                        {/* Bottom section */}

                        <div className="flex flex-col items-center gap-4 mx-auto mt-16 mb-10 max-w-2xl text-center">
                              <FaStore className="mx-auto mb-2 text-xl" />
                              <h2 className="font-semibold text-lg tracking-wide">SECURE VERSE MARKETPLACE</h2>
                              <p className="font-normal text-sm">
                                    Buy access to exclusive verses, teachings, or ceremonial materials from verified content creators.
                              </p>
                        </div>

                  </div>
            </section>

      );
};

export default Features;

const Feature = ({ icon, title, text, position }) => {
      return (
            <div className="md:max-w-xs max-w-2xl">
                  <p className={`flex justify-center text-2xl ${ position }`}>
                        {icon}
                  </p>
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="font-normal text-sm">
                        {text}
                  </p>
            </div>
      );
};