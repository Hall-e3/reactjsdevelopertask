
import { Hero, Navbar, SyllabusList } from "./components";
import { SyllabusProvider } from "./context/SyllabusContext";

export default function Home() {
  return (
    <SyllabusProvider>
      <main className="flex h-screen w-full flex-col">
        <Navbar />
        <Hero />
        <SyllabusList />
      </main>
    </SyllabusProvider>
  );
}
