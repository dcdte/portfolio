import Image from "next/image";
import Foto from "../assets/foto.png";

export default function AboutMe() {
  return (
    <sidebar className="flex flex-col w-full justify-between py-3 px-3 font-roboto-condensed ">
      <div className="flex justify-between items-start w-full gap-3">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-b from-[#01b9bd]/10 to-[#01b9bd]/0 min-w-[300px]">
          <Image src={Foto} alt="Foto" className="mask-b-from-85%" />
        </div>
        <div className="flex flex-col gap-5 mr-10">
          <h1 className="text-end text-md font-roboto-condensed  text-6xl font-semibold ">
            Federico López <br />
            Desarrollador Fullstack <br /> Diseñador UX/UI
          </h1>
          <p className="font-light text-end">
            Ayudo a empresas y marcas a transformar sus ideas en experiencias
            digitales de alto impacto. Combino mis habilidades en React, Next.js
            y WordPress con un enfoque en diseño en Figma para crear interfaces
            modernas, rápidas y optimizadas para SEO. Además, integro
            automatizaciones con n8n que mejoran la eficiencia y escalan
            procesos, logrando proyectos que no solo se ven increíbles, sino que
            generan resultados reales: más visibilidad, más conversiones y mayor
            valor para los usuarios.
          </p>
        </div>
      </div>
    </sidebar>
  );
}
