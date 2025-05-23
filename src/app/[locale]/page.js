'use client';

import { About, DownloadApp, Features, Footer, HeroList, HeroSection, HowToUse, JoinAsPriest, Principles, WorkingProcess, Navbar } from "../(components)";
import AOS from 'aos';
import { useEffect } from 'react';


export default function Home() {

      useEffect(() => {
            AOS.init({ duration: 700 });
      }, []);
      return (
            <main className="max-w-screen min-h-screen overflow-hidden">
                  <Navbar />
                  <HeroSection />
                  <HeroList />
                  <About />
                  {/* <Principles /> */}
                  <Features />
                  <JoinAsPriest />
                  <HowToUse />
                  <DownloadApp />
                  <WorkingProcess />
                  <HeroList />
                  <Footer />
            </main>
      );
}