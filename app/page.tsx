import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Card from "@/components/Card";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-gray-100">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={ navItems } />
        <Hero />
        <Grid />
        <Card />
        <Contact />
      </div>
    </main>
  );
}
