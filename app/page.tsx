import HeroSection from "./one";
import Searcher from "./searcher";
import Two from "./two";
import Three from "./three";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="-mt-16 md:-mt-24 bg-white relative z-10 border-t border-white">
        <div aria-hidden className="absolute -top-2 left-0 right-0 h-2 bg-white" />
        <div className="pt-16 md:pt-24">
          <Searcher />
        </div>
        <Two />
        <Three />
      </div>
      <main className="relative z-10">
        {/* The rest of your page content can go here */}
      </main>
    </>
  );
}
