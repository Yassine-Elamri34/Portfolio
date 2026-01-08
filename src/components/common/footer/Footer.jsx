import logo from "../../../assets/logo.png";

/* Footer navigation – MUST match section IDs */
const navItems = [
  { id: 1, name: "Home", link: "introduction" },
  { id: 2, name: "About", link: "about" },
  { id: 3, name: "Process", link: "process" },
  { id: 4, name: "Portfolio", link: "portfolio" },
  { id: 5, name: "Services", link: "services" },
  { id: 6, name: "Contact", link: "contact" },
];

const Footer = () => {
  return (
    <footer className="pt-25 md:pt-40 content max-2xl:px-3 bg-transparent">
      <div className="flex max-md:flex-col justify-between items-center text-neutral-200">

        {/* Logo → Home */}
        <a href="#introduction" className="flex items-center">
          <img src={logo} alt="logo" className="h-8 sm:h-14 rounded-2xl" />
          <span className="text-3xl sm:text-[32px] ms-3 font-semibold">
            Yassine
          </span>
        </a>

        {/* Footer Links */}
        <nav className="mx-7 max-md:my-7 text-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.link}`}
              className="mx-2 group inline-block relative text-[12px] sm:text-[16px]"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-[12px] sm:text-[16px]">
          © {new Date().getFullYear()} Yassine Elamri
        </p>
      </div>

      {/* Footer bottom text */}
      <p className="text-white text-center max-xs:text-[12px] max-md:text-[14px] py-10">
      
      </p>
    </footer>
  );
};

export default Footer;
