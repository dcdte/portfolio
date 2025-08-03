import Image from "next/image";
import Foto from "../assets/foto.png";

export default function AboutMe() {
  return (
    <sidebar className="flex flex-col max-w-lg justify-between py-3 px-3 background-blur rounded-4xl font-roboto-condensed rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg h-full">
      <div className="flex justify-start items-start w-full gap-3">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-b from-[#01b9bd] to-[#015bbd] shadow-[-5px_5px_25px_0px_#01b9bd]/20 min-w-[250px]">
          <Image src={Foto} alt="Foto" className="" />
        </div>
        <div>
          <p className="font-light text-justify text-md italic border border-white/20 rounded-3xl p-4">
            "Soy una persona directa, crítica y orientada a resolver. Me enfoco
            en lo esencial, valoro la claridad y no pierdo tiempo en rodeos.
            Trabajo con autonomía, siempre buscando soluciones prácticas con una
            actitud enfocada y resolutiva."
          </p>
        </div>
      </div>
    </sidebar>
  );
}
