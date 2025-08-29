import AboutMe from "./components/AboutMe";
import Header from "./components/header";
import VantaBackground from "./components/VantaBackground";

export default function Home() {
  return (
    <div className=" relative max-w-screen-xl mx-auto">
      {/* <VantaBackground /> */}
      <main className="p-4 flex flex-col gap-4 h-screen">
        <Header />
        <AboutMe />
      </main>
    </div>
  );
}
