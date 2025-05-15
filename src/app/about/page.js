'use client';
import Image from "next/image";
import logo from "../../assets/logo.svg";
import { Navbar } from "../(components)";

const AboutPage = () => {
      return (
            <div className="">
                  <Navbar />

                  <main className="flex flex-col justify-center items-center bg-white min-h-screen">
                        <div className="z-20 relative bg-white p-6 border border-secondary border-b-0 w-full max-w-xl">
                              {/* Top Frame */}
                              <div className="-top-16 left-1/2 -z-10 absolute bg-transparent p-6 border-[18px] border-secondary border-b-0 w-[80%] h-[60px] -translate-x-1/2">                              </div>
                              {/* Logo & Heading */}
                              <div className="mt-10 text-center">
                                    <div className="flex justify-center">

                                          <Image
                                                src={logo}
                                                alt="Ifa Kiko Logo"
                                                width={100}
                                                height={100}
                                                className='object-cover'
                                          />
                                    </div>

                                    <h2 className="mt-2 font-[900] font-space-grotesk text-dark text-4xl">
                                          Join our waitlist now
                                    </h2>
                                    <p className="mt-2 font-space-grotesk font-medium text-[#4B5C76] text-xl">
                                          You should be the first to know when we launch,
                                          Join our V.I.P waitlist here!
                                    </p>
                              </div>

                        </div>
                        {/* Form */}
                        <form className="space-y-4 p-6 border border-[#D9D9D9] rounded-lg w-full max-w-xl">
                              <div>
                                    <label className="block mb-1 font-medium text-gray-700 text-sm">Name</label>
                                    <input
                                          type="text"
                                          placeholder="Bimbo Odebiyi"
                                          className="px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary w-full"
                                    />
                              </div>
                              <div>
                                    <label className="block mb-1 font-medium text-gray-700 text-sm">Phone Number</label>
                                    <input
                                          type="tel"
                                          placeholder="08095874848"
                                          className="px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary w-full"
                                    />
                              </div>
                              <div>
                                    <label className="block mb-1 font-medium text-gray-700 text-sm">Email</label>
                                    <input
                                          type="email"
                                          placeholder="Bimboodebiyi@gmail.com"
                                          className="px-3 py-2 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary w-full"
                                    />
                              </div>

                              <button
                                    type="submit"
                                    className="bg-secondary py-2 rounded-md w-full text-white transition"
                              >
                                    Submit
                              </button>
                        </form>
                  </main>
            </div>

      );
};

export default AboutPage;