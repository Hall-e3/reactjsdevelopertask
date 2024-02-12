import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Hero, Navbar, Syllabus } from "./components";
import Avatar from "./components/Avatar";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col">
      <Navbar />
      <Hero />
      <Syllabus />
    </main>
  );
}
