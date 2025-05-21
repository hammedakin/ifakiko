import oponifa from "../../assets/oponifa.svg";
import opele from "../../assets/opele.svg";
import ereifa from "../../assets/ereifa.svg";
import Image from "next/image";
import Typewriter from 'typewriter-effect';

const About = () => {
      return (
            <section className="relative gap-12 grid md:grid-cols-2 my-10 w-full margins" id="about">
                  <div className="mb-10 md:mb-0">
                        <div className="mb-4 font-josefin-sans font-bold text-dark-100 text-2xl md:text-3xl tracking-widest">
                              <Typewriter
                                    options={{
                                          strings: ['ABOUT Ifá Kiko'],
                                          autoStart: true,
                                          loop: true,
                                    }}
                              />
                        </div>
                        <div className="mb-6 font-josefin-sans font-normal text-primary leading-relaxed">
                              <Typewriter
                                    options={{
                                          strings: ['IFA Kiko is a sacred digital space created to preserve and teach the oral traditions of Ifa and Orisa in an ethical, secure, and lineage-respectful manner. Rooted in Yoruba spirituality and guided by revered elders, the platform is not just an app–it is a spiritual mission.'],
                                          autoStart: true,
                                          loop: true,

                                    }}
                              />
                        </div>
                        <button className="bg-secondary hover:bg-lime-700 shadow-2xl py-3 pr-10 pl-6 rounded-xl rounded-tr-2xl font-semibold text-white leading-7 tracking-widest transition duration-300"
                              style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
                        >
                              EXPLORE MORE
                        </button>
                  </div>

                  <div className="relative">
                        <div className="mb-10 overflow-hidden">
                              <Image
                                    src={oponifa}
                                    alt="Opon Ifa"
                                    width={100}
                                    height={100}
                                    className='w-full object-cover'
                              />
                        </div>

                        <div className="relative">
                              <Image
                                    src={ereifa}
                                    alt="Ere Ifa"
                                    width={100}
                                    height={100}
                                    className='z-0 w-full object-cover'
                              />

                              <div className="right-10 -bottom-10 absolute mr-4 mb-4">
                                    <div className="bg-lime-600 shadow-lg px-4 py-2 rounded-xl font-josefin-sans font-normal text-white text-center">
                                          <p className="text-3xl md:text-3xl lg:text-6xl">
                                                10+
                                          </p>
                                          <p className="md:text-xl lg:text-3xl">
                                                Languages
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default About;