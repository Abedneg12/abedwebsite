import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";



export default function Home() {
  return (
    <main className="bg-gray-900">
      <Hero/>
      <About/>
      <Skill/>
      <Work/>
      <Contact/>

    </main>
  );
}
