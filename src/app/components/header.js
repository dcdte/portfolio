export default function Header() {
  return (
    <header className="flex justify-between py-3 px-3 background-blur rounded-full font-roboto-condensed rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
      <a
        href=""
        className="bg-foreground py-2 px-4 rounded-full text-background text-md  tracking-wider uppercase"
      >
        Contacto
      </a>
      <ul className="flex gap-8 items-center mr-4">
        <li>
          <a href="">Sobre mí</a>
        </li>
        <li>
          <a href="">Proyectos</a>
        </li>
        <li>
          <a href="">Habilidades</a>
        </li>
        <li>
          <a href="">Mi Carrera</a>
        </li>
      </ul>
    </header>
  );
}
