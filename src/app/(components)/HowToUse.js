import Image from "next/image";
import account from "../../assets/account.png";
import account1 from "../../assets/account1.png";
import info from "../../assets/info.png";
import payment from "../../assets/payment.png";
import payment1 from "../../assets/payment1.png";

const HowToUse = () => {
      return (
            <section className="bg-primary py-20 text-white">
                  <div className="margins">

                        <div
                              data-aos="zoom-in"
                              className="mb-12 font-josefin-sans text-center">
                              <h2 className="font-bold text-2xl md:text-3xl">HOW TO USE THE APP PERFECTLY</h2>
                              <p className="mx-auto mt-6 max-w-xl font-normal text-white text-sm md:text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.
                              </p>
                        </div>

                        <div

                              className="flex md:flex-row flex-col justify-around items-center gap-10 md:bg-[url('/spiral.svg')] md:bg-contain md:bg-no-repeat md:bg-top font-poppins">
                              {/* Step 1 */}
                              <div
                                    className="flex flex-col justify-between items-center md:items-start w-2/3 h-full md:h-98 text-center">
                                    <div className="relative mb-8 h-48">
                                          <div
                                                data-aos="flip-right"
                                                className="w-48">
                                                <Image
                                                      src={account}
                                                      alt="Account"
                                                      width={100}
                                                      height={100}
                                                      className='w-full object-cover'
                                                />
                                          </div>
                                          <div
                                                data-aos="flip-right"
                                                data-aos-delay="400"
                                                className="w-48">
                                                <Image
                                                      src={account1}
                                                      alt="Account"
                                                      width={100}
                                                      height={100}
                                                      className='w-full object-cover'
                                                />
                                          </div>
                                    </div>
                                    <h3
                                          data-aos="zoom-in-right"
                                          className="mb-2 font-medium text-2xl">Create Account</h3>
                                    <p
                                          data-aos="zoom-in"
                                          data-aos-delay="300"
                                          className="w-full md:w-2/3 font-normal text-white text-sm">
                                          Enter your information ensure your details safe and more secure
                                    </p>
                              </div>

                              {/* Step 2 */}
                              <div className="flex flex-col justify-between items-center w-2/3 h-full md:h-98 text-center">
                                    <div className="relative mb-6">
                                          <div
                                                data-aos="flip-right"
                                                className="w-48 h-48">
                                                <Image
                                                      src={info}
                                                      alt="Info"
                                                      width={200}
                                                      height={200}
                                                      className='h-48 object-contain'
                                                />
                                          </div>
                                    </div>
                                    <h3
                                          data-aos="zoom-in"
                                          className="mb-2 font-medium text-2xl">Enter Information</h3>
                                    <p
                                          data-aos="zoom-in"
                                          data-aos-delay="300"
                                          className="w-full md:w-2/3 font-normal text-white text-sm">
                                          Sending money faster & easier with end to end encryption.
                                    </p>
                              </div>

                              {/* Step 3 */}
                              <div className="flex flex-col justify-between items-center md:items-end w-2/3 h-full md:h-98 text-center">
                                    <div
                                          data-aos="flip-right"
                                          className="relative mb-6 w-48 h-48">
                                          <Image
                                                src={payment}
                                                alt="Payment"
                                                width={100}
                                                height={100}
                                                className='w-48 h-48 object-contain'
                                          />
                                          <div
                                                data-aos="zoom-in-right"
                                                className="top-1/2 -left-1 absolute">
                                                <Image
                                                      src={payment1}
                                                      alt="Payment"
                                                      width={100}
                                                      height={100}
                                                      className='w-20 object-contain'
                                                />
                                          </div>
                                    </div>
                                    <h3
                                          data-aos="zoom-in"
                                          className="mb-2 font-medium text-2xl">Add Payment</h3>
                                    <p
                                          data-aos="zoom-in"
                                          data-aos-delay="300"
                                          className="w-full md:w-2/3 font-normal text-white text-sm">
                                          Add multiple cards and track your daily expense with quality interface
                                    </p>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default HowToUse;