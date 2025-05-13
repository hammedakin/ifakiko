import Image from 'next/image';
import playstore from "../../assets/playstore.svg";
import appstore from "../../assets/appstore.svg";
import logo from "../../assets/logo.svg";

const HeroSection = () => {
      return (

            <section className="flex justify-center items-center bg-white px-4 min-h-screen margins">
                  <div className="relative items-center gap-12 grid md:grid-cols-2 w-full">
                        {/* Left Side - Text */}
                        <div className="relative bg-white shadow-md ml-28 p-6 border-[18px] border-secondary min-h-[460px]">
                              <div className="-left-18 absolute bg-white mr-8 px-6 py-8 border border-secondary">
                                    <h2 className="mb-8 font-bold text-primary leading-snug"

                                          style={{
                                                fontSize: 'clamp(18px, 2vw, 30px)',
                                                WebkitTextStroke: '1px var(--color-secondary)'
                                          }}
                                    >
                                          JOIN THOUSANDS LEARNING IFÁ THROUGH ANCESTRAL VOICE
                                    </h2>
                                    <p className="mb-4 font-medium text-dark-200 text-base leading-6">
                                          Available on iOS and Android<br />
                                          Free to join, pay-per-verse model.<br />
                                          Built for the spiritually curious, the committed learner, and the global Yoruba community
                                    </p>
                                    <h2 className="mb-4 font-semibold text-primary leading-snug"
                                          style={{
                                                fontSize: 'clamp(14px, 2vw, 25px)',
                                                WebkitTextStroke: '1px var(--color-secondary)'
                                          }}
                                    >
                                          DOWNLOAD APP NOW
                                    </h2>
                                    <p className="font-bold text-lime-900"></p>
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
                                                alt="Playstore"
                                                width={100}
                                                height={100}
                                                className='object-cover'
                                          />

                                    </div>
                              </div>
                        </div>

                        {/* Right Side - Ifá Kíkọ Box */}
                        <div className="relative flex justify-center items-center w-full h-full">
                              <div className="absolute bg-primary-100 rounded-[50px] w-48 h-full"
                                    style={{
                                          boxShadow: '0px 70px 100px 0px #00000040'
                                    }}
                              ></div>
                              <div className="z-10 relative flex justify-center items-center bg-primary px-10 py-6 rounded-[50px] w-96 h-48 font-semibold text-3xl">
                                    <Image
                                          src={logo}
                                          alt="Playstore"
                                          width={100}
                                          height={100}
                                          className='object-cover'
                                    />
                              </div>
                        </div>
                  </div>
            </section >
      );
};

export default HeroSection;