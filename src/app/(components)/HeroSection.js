import Image from 'next/image';
import playstore from "../../assets/playstore.svg";
import appstore from "../../assets/appstore.svg";
import logo from "../../assets/logo.svg";
import mobile1 from "../../assets/mobile1.svg";
import Typewriter from 'typewriter-effect';
import useTranslation from 'next-translate/useTranslation';

const HeroSection = () => {
      const { t } = useTranslation('common');

      return (

            <section className="flex justify-center items-center bg-white mt-10 md:mt-0 px-4 min-h-screen font-josefin-sans margins">
                  <div className="relative items-center gap-12 grid md:grid-cols-2 w-full">
                        {/* Left Side - Text */}
                        <div
                              data-aos="zoom-in-right"
                              className="relative bg-white shadow-md ml-15 md:ml-28 p-6 border-[18px] border-secondary min-h-[480px] md:min-h-[510px] lg:min-h-[460px]">
                              <div className="-left-18 absolute bg-white mr-8 px-6 py-8 border border-secondary">
                                    <h2 className="mb-8 font-bold text-primary leading-snug"
                                          style={{
                                                fontSize: 'clamp(18px, 2vw, 30px)',
                                                WebkitTextStroke: '0.5px var(--color-secondary)'
                                          }}
                                    >
                                          <Typewriter
                                                options={{
                                                      strings: ['JOIN THOUSANDS LEARNING IFÁ THROUGH ANCESTRAL VOICE'],
                                                      autoStart: true,
                                                      loop: true,
                                                }}
                                          />

                                    </h2>
                                    <p className="mb-4 font-medium text-dark-200 text-sm leading-6">
                                          Available on iOS and Android<br />
                                          Free to join, pay-per-verse model.<br />
                                          Built for the spiritually curious, the committed learner, and the global Yoruba community
                                    </p>
                                    <h2 className="mb-4 font-semibold text-primary leading-snug"
                                          style={{
                                                fontSize: 'clamp(14px, 2vw, 25px)',
                                                WebkitTextStroke: '0.5px var(--color-secondary)'
                                          }}
                                    >
                                          {t('DOWNLOAD APP NOW')}
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
                        <div className="flex justify-center items-center gap-3">
                              <div className="bg-secondary px-8 py-20"
                                    data-aos="zoom-in"
                                    style={{
                                          borderTopLeftRadius: '150px',
                                          borderBottomLeftRadius: '150px',
                                          borderTopRightRadius: '150px',
                                          borderBottomRightRadius: '150px',
                                    }}
                              >
                                    <Image
                                          data-aos="flip-right"
                                          data-aos-delay="500"
                                          src={mobile1}
                                          alt="Mobile"
                                          width={100}
                                          height={100}
                                          className='w-full object-cover'
                                    />
                              </div>
                              <div className="flex justify-center items-center bg-primary rounded-xl w-25"
                                    data-aos="fade-up"
                                    data-aos-delay="800"
                                    style={{
                                          borderTopLeftRadius: '150px',
                                          borderBottomLeftRadius: '150px',
                                          borderTopRightRadius: '150px',
                                          borderBottomRightRadius: '150px',
                                          height: '35rem'
                                    }}
                              >
                                    <Image
                                          // data-aos="zoom-in-left"
                                          // data-aos-delay="700"
                                          src={logo}
                                          alt="Playstore"
                                          width={100}
                                          height={100}
                                          className='object-cover'
                                          style={{ rotate: '90deg', width: '150px' }}
                                    />
                              </div>
                        </div>
                        {/* <div className="relative flex justify-center items-center my-32 md:my-0 w-full h-full">
                              <div
                                    data-aos="flip-right"
                                    data-aos-delay="600"
                                    className="absolute bg-secondary-100 rounded-[50px] w-48 h-96 md:h-full"
                                    style={{
                                          boxShadow: '0px 70px 100px 0px #00000040'
                                    }}
                              ></div>
                              <div
                                    data-aos="zoom-in-down"
                                    className="z-10 relative flex justify-center items-center bg-primary px-10 py-6 rounded-[50px] w-86 sm:w-96 h-48 font-semibold text-3xl">
                                    <Image
                                          data-aos="zoom-in-left"
                                          data-aos-delay="700"
                                          src={logo}
                                          alt="Playstore"
                                          width={100}
                                          height={100}
                                          className='object-cover'
                                    />
                              </div>
                        </div> */}
                  </div>
            </section >
      );
};

export default HeroSection;