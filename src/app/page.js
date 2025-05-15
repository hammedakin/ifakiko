import { About, DownloadApp, Features, Footer, HeroList, HeroSection, HowToUse, JoinAsPriest, Principles, WorkingProcess, Navbar } from "./(components)";

export default function Home() {
  return (
    <main className="max-w-screen min-h-screen overflow-hidden">
      <Navbar />
      <HeroSection />
      <HeroList />
      <About />
      <Principles />
      <Features />
      <JoinAsPriest />
      <HowToUse />
      <DownloadApp />
      <WorkingProcess />
      <Footer />
    </main>
  );
}