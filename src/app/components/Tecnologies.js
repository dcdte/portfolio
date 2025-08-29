import IconDocker from "../iconsSvg/iconDocker";
import IconFigma from "../iconsSvg/iconFigma";
import IconGit from "../iconsSvg/iconGit";
import IconGSAP from "../iconsSvg/iconGSAP";
import IconJavaScript from "../iconsSvg/iconJavaScript";
import IconMongoDB from "../iconsSvg/iconMongoDB";
import IconNextjs from "../iconsSvg/iconNext";
import IconNodejs from "../iconsSvg/iconNode";
import IconReact from "../iconsSvg/iconReact";
import IconSass from "../iconsSvg/iconSASS";
import IconTailwindCSS from "../iconsSvg/iconTailwind";

export default function Tecnologies() {
  return (
    <div className="">
      <h2 className="text-2xl font-semibold text-center font-roboto-condensed tracking-wide">Tecnologías</h2>
      <div>
        <IconReact className="" />
        <IconJavaScript />
        <IconGSAP />
        <IconMongoDB />
        <IconNodejs />
        <IconGit />
        <IconNextjs />
        <IconTailwindCSS />
        <IconFigma />
        <IconDocker />
        <IconSass />
      </div>
    </div>
  );
}
