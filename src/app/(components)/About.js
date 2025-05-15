import oponifa from "../../assets/oponifa.svg";
import opele from "../../assets/opele.svg";
import ereifa from "../../assets/ereifa.svg";
import Image from "next/image";

const About = () => {
      return (
            <section className="relative gap-12 grid md:grid-cols-2 my-10 w-full margins">
                  <div className="mb-10 md:mb-0">
                        <h2 className="mb-4 font-noto-sans font-bold text-dark-100 text-2xl md:text-3xl tracking-widest">ABOUT Ifá Kiko</h2>
                        <p className="mb-6 font-josefin-sans font-normal text-primary leading-relaxed">
                              IFA Kiko is a sacred digital space created to preserve and teach the oral traditions of Ifa and Orisa in an ethical, secure, and lineage-respectful manner. Rooted in Yoruba spirituality and guided by revered elders, the platform is not just an app–it is a spiritual mission.
                        </p>
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
                              <div className="bottom-0 left-0 absolute w-25 sm:w-40 md:w-28 lg:w-48 h-25 sm:h-40 md:h-28 lg:h-48">
                                    <Image
                                          src={opele}
                                          alt="Opele Ifa"
                                          width={150}
                                          height={150}
                                          className='w-full object-cover'
                                    />
                              </div>
                              <div className="right-10 -bottom-10 absolute mr-4 mb-4">
                                    <div className="bg-lime-600 shadow-lg px-4 py-2 rounded-xl font-noto-sans font-normal text-white text-center">
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