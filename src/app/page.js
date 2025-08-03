import AboutMe from "./components/AboutMe";
import Header from "./components/header";
import VantaBackground from "./components/VantaBackground";

export default function Home() {
  return (
    <div className=" relative ">
      {/* <VantaBackground /> */}
      <main className="p-4 flex flex-col gap-4 h-screen">
        <Header />
        <div className="flex-1">
          <AboutMe />
        </div>
      </main>
    </div>
  );
}
