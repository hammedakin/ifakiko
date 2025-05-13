import React from 'react';
import logo from "../../assets/logo.svg";
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiInstagramFill, RiSendPlane2Fill } from "react-icons/ri";

const Footer = () => {
      return (
            <footer className="bg-primary py-10 text-white text-sm margins">
                  <div className="flex md:flex-row flex-col justify-between gap-10">
                        {/* Left Column */}
                        <div className="md:w-1/3">
                              <Image
                                    src={logo}
                                    alt="Ifa Kiko"
                                    width={100}
                                    height={100}
                                    className='mb-5 object-cover'
                              />
                              <p className="mb-4 text-white">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                              </p>
                              <div className="flex justify-between items-center gap-4 pr-7 text-white text-xl">
                                    <FaFacebookF />
                                    <RiInstagramFill />
                                    <FaTwitter />
                                    <FaYoutube />
                              </div>
                        </div>

                        {/* Quick Links */}
                        <div className="md:w-1/3">
                              <h4 className="mb-4 font-semibold text-white text-lg">QUICK LINK</h4>
                              <ul className="space-y-4 text-gray-300">
                                    <li><a href="#" className="text-white">Terms</a></li>
                                    <li><a href="#" className="text-white">Privacy</a></li>
                                    <li><a href="#" className="text-white">Spiritual Commitment</a></li>
                                    <li><a href="#" className="text-white">Contact</a></li>
                              </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="md:w-1/3">
                              <h4 className="mb-4 font-semibold text-white text-lg">NEWS LETTER</h4>
                              <p className="mb-8 text-white">
                                    Subscribe our newsletter to get our latest update & news
                              </p>
                              <form className="flex bg-white p-0.5 rounded-md">
                                    <input
                                          type="email"
                                          placeholder="Your email address"
                                          className="bg-white px-4 py-2 rounded-l-md focus:outline-none w-full text-black"
                                    />
                                    <button
                                          type="submit"
                                          className="flex justify-center items-center bg-secondary px-4 rounded-md text-white text-2xl"
                                    >
                                          <RiSendPlane2Fill />
                                    </button>
                              </form>
                        </div>
                  </div>

                  <hr className="mx-0 md:mx-8 my-10 border-white" />

                  <div className="text-white text-center">
                        <p>&copy; Copyright 2025 IFAKIKO. All Right Reserved.</p>
                  </div>
            </footer>);
};

export default Footer;