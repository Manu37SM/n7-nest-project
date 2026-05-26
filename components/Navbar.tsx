export default function Navbar() {
  return (
    <header className="w-full py-6 px-8 flex justify-between items-center max-w-7xl mx-auto">
      <div className="text-3xl font-bold text-blue-500">N7</div>

      <nav className="hidden md:flex gap-8 text-sm items-center">
        <a
          href="#solutions"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          Solutions
        </a>

        <a
          href="#insights"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          Resources
        </a>

        <a
          href="#about"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          About Us
        </a>

        <a
          href="#contact"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          Contact
        </a>
      </nav>

      <button className="bg-blue-600 hover:bg-blue-500 hover:scale-105 transition-all duration-300 px-5 py-2 rounded-full hover:bg-blue-500 transition-colors duration-300">
        Request Demo
      </button>
    </header>
  );
}
