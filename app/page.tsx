import { Hero, Navbar } from "./components";

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col">
      <Navbar />
      <Hero />
      <section className="py-20 bg-[#f9f9f9]">
        <div className="max-w-[1260px] mx-auto py-10 h-full">
          <div className="flex flex-col justify-center px-6 space-y-10 order-last md:order-none">
            <h4 className="font-bold text-black">Reduce bureaucracy</h4>
            <p className="text-gray_color text-[13px] sm:text-[15px] text-start font-medium">
              Say goodbye to the bureaucratic hurdles involved in replacing a lost ID. FindIt streamlines the process by connecting users who have lost their
              IDs with those who have found them, eliminating unnecessary paperwork and delays.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
