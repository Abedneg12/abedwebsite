import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Navbar from "@/app/components/Navbar";


export default function Home() {
  return (
    <main className="bg-gray-900">
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Work/>
      <Contact/>

    </main>
  );
}
