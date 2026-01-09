import logo from "../../../assets/logo.png";

const navItems = [
  { id: 1, name: "Home", link: "introduction" },
  { id: 2, name: "About", link: "about" },
  { id: 3, name: "Process", link: "process" },
  { id: 4, name: "Portfolio", link: "portfolio" },
  { id: 5, name: "Services", link: "services" },
  { id: 6, name: "Contact", link: "contact" },
];

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer = () => {
  return (
    <footer className="pt-25 md:pt-40 content max-2xl:px-3 bg-transparent">
      <div className="flex max-md:flex-col justify-between items-center text-neutral-200">

        {/* Logo → Home */}
        <button
          onClick={() => scrollToSection("introduction")}
          className="flex items-center cursor-pointer"
        >
          <img src={logo} alt="logo" className="h-8 sm:h-14 rounded-2xl" />
          <span className="text-3xl sm:text-[32px] ms-3 font-semibold">
            Yassine
          </span>
        </button>

        {/* Footer Links */}
        <nav className="mx-7 max-md:my-7 text-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.link)}
              className="mx-2 group inline-block relative text-[12px] sm:text-[16px]"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
            </button>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-[12px] sm:text-[16px]">
          © {new Date().getFullYear()} Yassine Elamri
        </p>
      </div>
    </footer>
  );
};

export default Footer;
