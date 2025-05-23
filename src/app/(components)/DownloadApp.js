'use client';

import Image from "next/image";
import { FaDownload, FaThumbsUp, FaStar } from "react-icons/fa";
import playstore from "../../assets/playstore.svg";
import appstore from "../../assets/appstore.svg";
import mobile3 from "../../assets/mobile3.png";
import mobile4 from "../../assets/mobile4.svg";
import mobile5 from "../../assets/mobile5.png";
import oval from "../../assets/oval.svg";


const DownloadApp = () => {


      return (
            <section className="flex lg:flex-row flex-col justify-between items-center gap-10 bg-white py-16 font-josefin-sans margins">
                  <div className="max-w-xl">
                        <h2 className="mb-4 font-semibold text-[30px] text-primary leading-snug"
                        >
                              DOWNLOAD APP NOW
                        </h2>
                        <p className="mb-4 font-medium text-dark-200 text-base leading-6">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                        </p>

                        <div className="flex gap-4 mb-8">
                              <div className="flex gap-3">
                                    <Image
                                          src={playstore}
                                          alt="Playstore"
                                          width={100}
                                          height={100}
                                          className='object-cover'
                                    />
                                    <Image
                                          src={appstore}
                                          alt="Appstore"
                                          width={100}
                                          height={100}
                                          className='object-cover'
                                    />

                              </div>
                        </div>

                        <div className="flex gap-4 text-center">
                              <div className="flex flex-col items-center bg-secondary p-6 rounded-md text-white">
                                    <FaDownload className="mb-2 text-2xl" />
                                    <p className="font-bold text-lg"
                                          style={{
                                                fontSize: 'clamp(12px, 1vw, 18px)',
                                          }}
                                    >59865</p>
                                    <p className="text-sm"
                                          style={{
                                                fontSize: 'clamp(10px, 1vw, 14px)',
                                          }}
                                    >DOWNLOAD</p>
                              </div>
                              <div className="flex flex-col items-center bg-secondary p-6 rounded-md text-white">
                                    <FaThumbsUp className="mb-2 text-2xl" />
                                    <p className="font-bold text-lg"
                                          style={{
                                                fontSize: 'clamp(14px, 1vw, 18px)',
                                          }}
                                    >29852</p>
                                    <p className="text-sm"
                                          style={{
                                                fontSize: 'clamp(10px, 1vw, 14px)',
                                          }}
                                    >LIKE</p>
                              </div>
                              <div className="flex flex-col items-center bg-secondary p-6 rounded-md text-white">
                                    <FaStar className="mb-2 text-2xl" />
                                    <p className="font-bold text-lg"
                                          style={{
                                                fontSize: 'clamp(14px, 1vw, 18px)',
                                          }}
                                    >1500</p>
                                    <p className="text-sm"
                                          style={{
                                                fontSize: 'clamp(10px, 1vw, 14px)',
                                          }}
                                    >5 STAR RATING</p>
                              </div>
                        </div>
                  </div>
                  <div className="hidden lg:block">

                        <div className="relative flex justify-center items-end w-full max-w-md">

                              <div className="relative flex items-end px-8 py-10"
                                    style={{
                                          backgroundColor: '#74B11780',
                                          borderRadius: '20px'
                                    }}
                              >
                                    <div
                                          data-aos="zoom-in"
                                          data-aos-delay="300"
                                          className="z-10 bg-secondary-100 shadow-lg rounded-[40px] w-40 h-[20rem] rotate-[-10deg]">
                                          <Image
                                                src={mobile3}
                                                alt="Mobile"
                                                width={100}
                                                height={100}
                                                className='rounded-xl w-full object-cover'
                                          />
                                    </div>
                                    <div
                                          data-aos="zoom-in"
                                          className="z-20 bg-secondary-100 shadow-lg mb-4 rounded-[40px] w-40 h-[20rem]">
                                          <Image
                                                src={mobile4}
                                                alt="Mobile"
                                                width={100}
                                                height={100}
                                                className='rounded-xl w-full object-cover'
                                          />
                                    </div>
                                    <div
                                          data-aos="zoom-in"
                                          data-aos-delay="300"
                                          className="z-10 bg-secondary-100 shadow-lg rounded-[40px] w-40 h-[20rem] rotate-[10deg]">
                                          <Image
                                                src={mobile5}
                                                alt="Mobile"
                                                width={100}
                                                height={100}
                                                className='rounded-xl w-full object-cover'
                                          />
                                    </div>
                              </div>
                              <div className="-left-10 z-40 absolute rounded-full w-64 h-10"
                                    style={{
                                          bottom: '10px'
                                    }}
                              >

                                    <Image
                                          src={oval}
                                          alt="Oval"
                                          width={100}
                                          height={100}
                                          className='w-full object-cover'
                                    />
                              </div>
                        </div>
                  </div>

            </section>
      );
};

export default DownloadApp;