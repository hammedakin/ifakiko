import { About, DownloadApp, Features, Footer, HeroList, HeroSection, HowToUse, JoinAsPriest, MoreAbout, WorkingProcess, Navbar } from "./(components)";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HeroList />
      <About />
      <MoreAbout />
      <Features />
      <JoinAsPriest />
      <HowToUse />
      <DownloadApp />
      <WorkingProcess />
      <Footer />
    </main>
  );
}