import AboutMe from "./components/AboutMe";
import Header from "./components/header";
import Proyects from "./components/Proyects";
import Tecnologies from "./components/Tecnologies";
import VantaBackground from "./components/VantaBackground";

export default function Home() {
  return (
    <div className=" relative max-w-screen-xl mx-auto py-4 flex flex-col gap-4">
      {/* <VantaBackground /> */}
      <Header />
      <main className="p-4 flex flex-col gap-4 h-screen rounded-4xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
        <AboutMe />
        <Proyects />
        <Tecnologies />
      </main>
    </div>
  );
}
