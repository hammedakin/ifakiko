import Image from "next/image";
import { FaDownload, FaThumbsUp, FaStar } from "react-icons/fa";
import playstore from "../../assets/playstore.svg";
import appstore from "../../assets/appstore.svg";
const DownloadApp = () => {
      return (
            <section className="flex md:flex-row flex-col justify-between items-center gap-10 bg-white px-6 md:px-20 py-16 font-josefin-sans">
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
                                          alt="Playstore"
                                          width={100}
                                          height={100}
                                          className='object-cover'
                                    />

                              </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-center">
                              <div className="flex flex-col items-center bg-secondary p-6 rounded-md w-[120px] text-white">
                                    <FaDownload className="mb-2 text-2xl" />
                                    <p className="font-bold text-lg">59865</p>
                                    <p className="text-sm">DOWNLOAD</p>
                              </div>
                              <div className="flex flex-col items-center bg-secondary p-6 rounded-md w-[120px] text-white">
                                    <FaThumbsUp className="mb-2 text-2xl" />
                                    <p className="font-bold text-lg">29852</p>
                                    <p className="text-sm">LIKE</p>
                              </div>
                              <div className="flex flex-col items-center bg-secondary p-6 rounded-md w-[140px] text-white">
                                    <FaStar className="mb-2 text-2xl" />
                                    <p className="font-bold text-lg">1500</p>
                                    <p className="text-sm">5 STAR RATING</p>
                              </div>
                        </div>
                  </div>

                  <div className="relative flex justify-center items-end w-full max-w-md">
                        <div className="bottom-0 absolute bg-[#5B391F] rounded-full w-48 h-10"></div>
                        <div className="relative flex items-end gap-4">
                              <div className="bg-secondary-100 shadow-lg rounded-[40px] w-24 h-56 rotate-[-10deg]"></div>
                              <div className="bg-secondary-100 shadow-lg rounded-[40px] w-28 h-72"></div>
                              <div className="bg-secondary-100 shadow-lg rounded-[40px] w-24 h-56 rotate-[10deg]"></div>
                        </div>
                  </div>
            </section>
      );
};

export default DownloadApp;