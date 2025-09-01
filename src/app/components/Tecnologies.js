"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

import IconDocker from "../iconsSvg/iconDocker";
import IconFigma from "../iconsSvg/iconFigma";
import IconGit from "../iconsSvg/iconGit";
import IconJavaScript from "../iconsSvg/iconJavaScript";
import IconMongoDB from "../iconsSvg/iconMongoDB";
import IconN8n from "../iconsSvg/iconN8n";
import IconNextjs from "../iconsSvg/iconNext";
import IconNodejs from "../iconsSvg/iconNode";
import IconReact from "../iconsSvg/iconReact";
import IconSass from "../iconsSvg/iconSASS";
import IconShopify from "../iconsSvg/iconShopify";
import IconTailwindCSS from "../iconsSvg/iconTailwind";
import IconWordPress from "../iconsSvg/iconWordPress";

export default function Tecnologies() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll(".tech-card");

    cards.forEach((card) => {
      const logo = card.querySelector(".logo"); // hijo a animar
      const text = card.querySelector(".text");

      const handleEnter = () => {
        gsap.killTweensOf([logo, text]);
        gsap.set(text, { opacity: 0, y: 20 }); // estado inicial asegurado

        gsap.to(logo, {
          y: -20,
          scale: 1.2,
          duration: 0.2,
          ease: "power1.inOut",
          overwrite: "auto",
        });

        gsap.to(text, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.inOut",
          overwrite: "auto",
        });
      };

      const handleLeave = () => {
        gsap.killTweensOf([logo, text]);

        gsap.to(logo, {
          y: 0,
          scale: 1,
          duration: 0.2,
          ease: "power1.out",
          overwrite: "auto",
        });

        gsap.to(text, {
          opacity: 0,
          y: 20,
          duration: 0.2,
          ease: "power1.out",
          overwrite: "auto",
        });
      };

      text;
      card.addEventListener("pointerenter", handleEnter);
      card.addEventListener("pointerleave", handleLeave);

      // cleanup
      card._handler = handleEnter;
      card._leaveHandler = handleLeave;
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("pointerenter", card._handler);
        card.removeEventListener("pointerleave", card._leaveHandler);
      });
    };
  }, []);

  return (
    <div className="">
      <h2 className="text-2xl font-semibold text-center font-roboto-condensed tracking-wide mb-4">
        Tecnologías
      </h2>
      <div
        className="flex items-center flex-wrap justify-center gap-4"
        ref={containerRef}
      >
        <div className="tech-card flex relative flex-col items-center bg-gradient-to-b  from-[#61DAFB]/20 to-[#000]/0 p-4 rounded-lg gap-2 cursor-pointer">
          <IconReact className="logo" />
          <p className="text opacity-0 absolute bottom-0 text-[#61DAFB] text-lg font-semibold tracking-wide">
            React
          </p>
        </div>
        <div className="tech-card flex relative flex-col items-center bg-gradient-to-b  from-[#F7DF1E]/20 to-[#000]/0 p-4 rounded-lg gap-2 cursor-pointer">
          <IconJavaScript className="logo" />
          <p className="text opacity-0 absolute bottom-0 text-[#F7DF1E] text-lg font-semibold tracking-wide">
            JavaScript
          </p>
        </div>
        <div className="tech-card flex flex-col relative items-center bg-gradient-to-b  from-[#4DB33D]/20 to-[#000]/0 p-4 rounded-lg gap-2 cursor-pointer">
          <IconMongoDB className="logo" />
          <p className="text opacity-0 absolute bottom-0 text-[#4DB33D] text-lg font-semibold tracking-wide">
            MongoDB
          </p>
        </div>
        <div className="tech-card flex flex-col relative items-center bg-gradient-to-b  from-[#8CC84B]/20 to-[#000]/0 p-4 rounded-lg gap-2 cursor-pointer">
          <IconNodejs className="logo" />
          <p className="text opacity-0 absolute bottom-0 text-[#8CC84B] text-lg font-semibold tracking-wide">
            Node.js
          </p>
        </div>
        <div className="tech-card flex flex-col relative items-center bg-gradient-to-b  from-[#F05032]/20 to-[#000]/0 p-4 rounded-lg gap-2 cursor-pointer">
          <IconGit className="logo" />
          <p className="text opacity-0 absolute bottom-0 text-[#F05032] text-lg font-semibold tracking-wide">
            Git
          </p>
        </div>
        <div className="tech-card flex flex-col relative items-center bg-gradient-to-b  from-[#fff]/20 to-[#000]/0 p-4 rounded-lg gap-2 cursor-pointer">
          <IconNextjs className="logo" />
          <p className="text opacity-0 absolute bottom-0 text-[#fff] text-lg font-semibold tracking-wide">
            Next.js
          </p>
        </div>
        <div className="tech-card flex flex-col relative items-center bg-gradient-to-b  from-[#06B6D4]/20 to-[#000]/0 p-4 rounded-lg gap-2 cursor-pointer">
          <IconTailwindCSS className="logo" />
          <p className="text opacity-0 absolute bottom-0 text-[#06B6D4] text-lg font-semibold tracking-wide">
            Tailwind
          </p>
        </div>
        <div className="tech-card flex flex-col relative items-center bg-gradient-to-b  from-[#A259FF]/20 to-[#000]/0 p-4 rounded-lg gap-2 cursor-pointer">
          <IconFigma className="logo" />
          <p className="text opacity-0 absolute bottom-0 text-[#A259FF] text-lg font-semibold tracking-wide">
            Figma
          </p>
        </div>
        <div className="tech-card flex flex-col relative items-center bg-gradient-to-b  from-[#008fe2]/20 to-[#000]/0 p-4 rounded-lg gap-2 cursor-pointer">
          <IconDocker className="logo" />
          <p className="text opacity-0 absolute bottom-0 text-[#008fe2] text-lg font-semibold tracking-wide">
            Docker
          </p>
        </div>
        <div className="tech-card flex flex-col relative items-center bg-gradient-to-b  from-[#CF649A]/20 to-[#000]/0 p-4 rounded-lg gap-2 cursor-pointer">
          <IconSass className="logo" />
          <p className="text opacity-0 absolute bottom-0 text-[#CF649A] text-lg font-semibold tracking-wide">
            Sass
          </p>
        </div>
        <div className="tech-card flex flex-col relative items-center bg-gradient-to-b  from-[#21759b]/20 to-[#000]/0 p-4 rounded-lg gap-2 cursor-pointer">
          <IconWordPress className="logo" />
          <p className="text opacity-0 absolute bottom-0 text-[#21759b] text-lg font-semibold tracking-wide">
            WordPress
          </p>
        </div>
        <div className="tech-card flex flex-col relative items-center bg-gradient-to-b  from-[#95BF46]/20 to-[#000]/0 p-4 rounded-lg gap-2 cursor-pointer">
          <IconShopify className="logo" />
          <p className="text opacity-0 absolute bottom-0 text-[#95BF46] text-lg font-semibold tracking-wide">
            Shopify
          </p>
        </div>
        <div className="tech-card flex flex-col relative items-center bg-gradient-to-b  from-[#ea4b71]/20 to-[#000]/0 p-4 rounded-lg gap-2 cursor-pointer">
          <IconN8n className="logo" />
          <p className="text opacity-0 absolute bottom-0 text-[#ea4b71] text-lg font-semibold tracking-wide">
            N8n
          </p>
        </div>
      </div>
    </div>
  );
}
