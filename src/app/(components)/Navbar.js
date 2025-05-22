'use client';

import { useState } from 'react';
import logo from "../../assets/logo.svg";
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { FaChevronDown, FaGlobeAmericas } from "react-icons/fa";
import LanguageSwitcher from '../../components/LanguageSwitcher';

const Navbar = () => {

      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

      const navLink = [
            { label: 'Home', href: '/' },
            { label: 'About Ifá', href: '/about' },
            { label: 'Explore Verses', href: '#verses' },
            { label: 'Features', href: '#features' },
            { label: 'Pricing', href: '#' },
      ];
      return (
            <>
                  {/* Navigation */}
                  <header className="margins">
                        <div className="flex justify-between items-center px-4 py-6 pt-14 font-lato">

                              <div className="">
                                    <Link href="/">
                                          <Image
                                                src={logo}
                                                alt="Ifa Kiko Logo"
                                                width={100}
                                                height={100}
                                                className='object-cover'
                                          />
                                    </Link>
                              </div>

                              {/* Desktop Navigation */}
                              <nav className="hidden md:flex items-center gap-8 text-xl">
                                    {
                                          navLink.map(({ label, href }, i) =>
                                                <a
                                                      key={i}
                                                      href={href} className="font-medium text-dark hover:text-secondary text-sm">
                                                      {label}
                                                </a>
                                          )
                                    }
                              </nav>

                              {/* Desktop CTA Button */}
                              <div className="hidden md:block">
                                    <div className="flex gap-5">

                                          <button
                                                className="bg-white px-8 py-2 font-bold text-dark text-sm"
                                          >
                                                Login
                                          </button>
                                          <button
                                                className="bg-white px-8 py-2 rounded-xl font-bold text-secondary text-sm"
                                                style={{
                                                      border: '2px solid',
                                                      borderImageSource: 'linear-gradient(135deg, #74B117 13.54%, #333333 100%)',
                                                      borderImageSlice: 1,
                                                      borderRadius: '12px !important',
                                                }}
                                          >
                                                Sign up
                                          </button>
                                          {/* <button
                                          className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl font-bold text-secondary text-sm"
                                          style={{
                                                border: '2px solid',
                                                borderImageSource: 'linear-gradient(135deg, #74B117 13.54%, #333333 100%)',
                                                borderImageSlice: 1,
                                                borderRadius: '12px !important',
                                          }}
                                    >
                                          <FaGlobeAmericas /> En <FaChevronDown />
                                    </button> */}
                                          <LanguageSwitcher />

                                    </div>

                              </div>


                              {/* Mobile Menu Button */}
                              <button className="md:hidden text-secondary" onClick={toggleMenu} aria-label="Toggle menu">
                                    <Menu size={35} />
                              </button>
                        </div>

                  </header>

                  {/* Mobile Menu */}
                  {isMenuOpen && (
                        <div className="md:hidden z-50 fixed inset-0 flex justify-center bg-white shadow-2xl p-4 h-fit">
                              <div className="mx-auto px-4 py-6 container">
                                    <div className="flex justify-between items-center mb-8">
                                          <div className="">
                                                <Link href="/">
                                                      <Image
                                                            src={logo}
                                                            alt="Ifa Kiko Logo"
                                                            width={100}
                                                            height={100}
                                                            className='object-cover'
                                                      />
                                                </Link>
                                          </div>
                                          <button onClick={toggleMenu} aria-label="Close menu" className="text-black">
                                                <X size={30} />
                                          </button>
                                    </div>
                                    <nav className="flex flex-col gap-6 text-xl">
                                          {
                                                navLink.map(({ label, href }, i) =>
                                                      <Link
                                                            key={i}
                                                            href={href}
                                                            className="text-black hover:text-secondary" onClick={toggleMenu}>
                                                            {label}
                                                      </Link>
                                                )
                                          }
                                    </nav>
                                    <div className="mt-10">
                                          <div className="flex flex-wrap justify-center gap-5">

                                                <button
                                                      className="bg-white px-8 py-2 font-bold text-dark text-sm"
                                                >
                                                      Login
                                                </button>
                                                <button
                                                      className="bg-white px-8 py-2 rounded-xl font-bold text-secondary text-sm"
                                                      style={{
                                                            border: '2px solid',
                                                            borderImageSource: 'linear-gradient(135deg, #74B117 13.54%, #333333 100%)',
                                                            borderImageSlice: 1,
                                                            borderRadius: '12px !important',
                                                      }}
                                                >
                                                      Sign up
                                                </button>
                                                <LanguageSwitcher />
                                          </div>

                                    </div>
                              </div>
                        </div>
                  )}

            </>
      );
};

export default Navbar;