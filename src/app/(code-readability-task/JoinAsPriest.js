import Image from 'next/image';
import React from 'react';
import shapes from '../../assets/shapes.svg';

/**
 * JoinAsPriest Component
 * 
 * A call-to-action section inviting users to join as Priest Contributors.
 * Features two columns: text content and an illustrative image.
 * Includes AOS (Animate on Scroll) animations and responsive design.
 */
const JoinAsPriest = () => {
      return (
            <section className="bg-white py-20 font-space-grotesk margins">
                  <div className="flex md:flex-row flex-col justify-between items-center gap-12">

                        {/* Left Column: Text Content */}
                        <div data-aos="zoom-in-right" className="w-full md:w-2/5">
                              <h2 className="mb-4 font-medium text-[30px] text-primary leading-snug">
                                    Preserve, Learn, and Honor the Legacy of Ifa
                              </h2>
                              <p className="mb-4 font-normal text-primary text-base leading-6">
                                    IFA Kiko is more than an app — it's a spiritual movement for digital preservation.
                                    Contact us today to learn more about what we do.
                              </p>
                              <button className="bg-secondary-100 px-6 py-4 rounded-xl font-light text-white tracking-wider">
                                    Join as a Priest Contributor
                              </button>
                        </div>

                        {/* Right Column: Image */}
                        <div data-aos="zoom-in" className="w-full md:w-2/5">
                              <div>
                                    <Image
                                          src={shapes}
                                          alt="Shapes"
                                          width={100}
                                          height={100}
                                          className="w-full object-cover"
                                    />
                              </div>
                        </div>

                  </div>
            </section>
      );
};

export default JoinAsPriest;
