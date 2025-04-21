import Header from "@/_components/Header";
import Info from "@/_components/Info";
import About from "@/_components/About";
import Projects from "@/_components/Projects";
import Contact from "@/_components/Contact";

export default function Home() {
  return (
    <section
      id="home"
      className="bg-zinc-800 sm:mx-40 min-h-screen px-4 py-10 sm:py-10 sm:px-16"
    >
      <Header />
      <Info />
      <About />
      <Projects />
      <Contact />
    </section>
  );
}
