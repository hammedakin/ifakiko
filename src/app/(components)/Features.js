import React from 'react';
import { FaHeadphones, FaMicrophone, FaStore, FaSitemap, FaUser, FaBook } from "react-icons/fa";
import mobile2 from "../../assets/mobile2.svg";
import Image from 'next/image';

const Features = () => {
      return (
            <section className="bg-primary py-20 font-josefin-sans text-white" id='features'>
                  <div className="margins">
                        <div
                              data-aos="zoom-in"
                              className="mb-12 text-center">
                              <h2 className="font-bold text-2xl md:text-3xl">
                                    APP FEATURES
                              </h2>
                        </div>

                        <div
                              data-aos="fade-left"
                              className="flex flex-col items-center gap-4 mx-auto mb-12 max-w-2xl text-center">
                              <FaHeadphones className="text-2xl" />
                              <h2 className="font-semibold text-lg tracking-wide">AUDIO-VISUAL VERSE LEARNING</h2>
                              <p className="font-normal text-sm">
                                    Engage with authentic Ifá verses through high-quality video and audio recordings<br className="hidden md:block" /> from verified Babaláwo (priests).
                              </p>
                        </div>


                        <div className="relative gap-x-0 gap-y-10 grid grid-cols-1 md:grid-cols-3 mx-auto w-full max-w-6xl">
                              {/* Left column */}
                              <div
                                    data-aos="fade-right"
                                    className="flex flex-col items-center md:items-end gap-10 md:gap-48 text-center md:text-right">

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

                                    <div
                                          data-aos="flip-left"
                                          data-aos-easing="ease-out-cubic"
                                          data-aos-duration="1000"
                                          className="flex justify-center items-center">
                                          <div className="bg-secondary-10 rounded-3xl w-44 md:w-fit h-96 md:h-fit lg:h-[450px]">
                                                <Image
                                                      src={mobile2}
                                                      alt="Opon Ifa"
                                                      width={100}
                                                      height={100}
                                                      className='w-full h-96 md:h-[500px] lg:h-[450px] object-cover'
                                                />
                                          </div>
                                    </div>

                              </div>
                              {/* Right column */}
                              <div
                                    data-aos="fade-left"
                                    className="flex flex-col items-center md:items-start gap-10 md:gap-48 md:text-left text-center">
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

                        <div
                              data-aos="fade-right"
                              className="flex flex-col items-center gap-4 mx-auto mt-16 mb-10 max-w-2xl text-center">
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