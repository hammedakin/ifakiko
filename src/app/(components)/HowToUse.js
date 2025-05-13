import { FaUserPlus, FaLock, FaCreditCard } from "react-icons/fa";

const HowToUse = () => {
      return (
            <section className="bg-[#1D140B] py-16 text-white margins">
                  <div className="mb-12 text-center">
                        <h2 className="font-bold text-2xl md:text-3xl">HOW TO USE THE APP PERFECTLY</h2>
                        <p className="mx-auto mt-4 max-w-xl text-[#D1CBC5] text-sm md:text-base">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.
                        </p>
                  </div>

                  <div className="flex md:flex-row flex-col justify-between items-center gap-10">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center max-w-xs text-center">
                              <div className="relative mb-6">
                                    <div className="flex justify-center items-center bg-white shadow-md rounded-xl w-24 h-20">
                                          <FaUserPlus className="text-lime-500 text-3xl" />
                                    </div>
                                    <div className="bg-lime-500 mx-auto mt-2 rounded-md w-28 h-10"></div>
                              </div>
                              <h3 className="mb-2 font-semibold text-lg">Create Account</h3>
                              <p className="text-[#D1CBC5] text-sm">
                                    Enter your information<br />ensure your details<br />safe and more secure
                              </p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center max-w-xs text-center">
                              <div className="relative mb-6">
                                    <div className="flex justify-center items-center bg-white shadow-md rounded-xl w-24 h-20">
                                          <FaLock className="text-lime-500 text-3xl" />
                                    </div>
                              </div>
                              <h3 className="mb-2 font-semibold text-lg">Enter Information</h3>
                              <p className="text-[#D1CBC5] text-sm">
                                    Sending money faster &<br />easier with end to end<br />encryption.
                              </p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center max-w-xs text-center">
                              <div className="relative mb-6">
                                    <div className="flex justify-center items-center bg-white shadow-md rounded-xl w-24 h-20">
                                          <FaCreditCard className="text-lime-500 text-3xl" />
                                    </div>
                                    <div className="bg-lime-500 mx-auto mt-2 rounded-md w-28 h-10"></div>
                              </div>
                              <h3 className="mb-2 font-semibold text-lg">Add Payment</h3>
                              <p className="text-[#D1CBC5] text-sm">
                                    Add multiple cards and<br />track your daily expense<br />with quality interface
                              </p>
                        </div>
                  </div>
            </section>
      );
};

export default HowToUse;