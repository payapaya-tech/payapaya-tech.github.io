import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Members } from "@/components/members";
import { Process } from "@/components/process";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <About />
        <Process />
        <Members />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
