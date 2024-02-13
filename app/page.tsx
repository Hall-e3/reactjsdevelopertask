"use client";
import { Hero, Navbar } from "./components";
import { SyllabusProvider } from "./context/SyllabusContext";
import SyllabusPage from "./syllabus/syllabus";
export default function Home() {
  return (
    <SyllabusProvider>
      <main className="flex h-screen w-full flex-col">
        <Navbar />
        <Hero />
        <SyllabusPage />
      </main>
    </SyllabusProvider>
  );
}
