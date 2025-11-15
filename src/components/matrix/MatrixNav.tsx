import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Menu, X } from "lucide-react";

export function MatrixNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "home", id: "home" },
    { name: "about", id: "about" },
    { name: "certs", id: "certifications" },
    { name: "skills", id: "skills" },
    { name: "exp", id: "experience" },
    { name: "projects", id: "projects" },
    { name: "contact", id: "contact" },
  ];

  const isDark = theme === "dark";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        isDark ? "border-b-2 border-[#00ff41]" : "border-b-2 border-gray-200"
      } ${
        isScrolled
          ? isDark
            ? "bg-[rgba(13,2,8,0.95)] backdrop-blur-md shadow-[0_2px_20px_rgba(0,255,65,0.3)]"
            : "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center h-16">
        <button
          onClick={() => scrollToSection("home")}
          className={`text-2xl transition-all hover:scale-105 ${
            isDark
              ? "text-[#00ff41] [text-shadow:0_0_10px_#00ff41] before:content-['>_'] before:mr-1"
              : "text-gray-900 font-bold"
          }`}
        >
          {isDark ? "HEMANT.SYS" : "Hemant Bhadke"}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`transition-all hover:scale-105 ${
                  isDark
                    ? "text-[#00ff41] hover:[text-shadow:0_0_10px_#00ff41] before:content-['['] before:mr-1 after:content-[']'] after:ml-1"
                    : "text-gray-700 hover:text-gray-900 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-900 after:transition-all hover:after:w-full"
                }`}
              >
                {link.name}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 flex items-center justify-center transition-all hover:scale-110 ${
                isDark
                  ? "border-2 border-[#00ff41] hover:[box-shadow:0_0_10px_#00ff41] hover:bg-[rgba(0,255,65,0.1)]"
                  : "bg-gray-100 hover:bg-gray-200 rounded-lg"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden gap-4 items-center">
          <button
            onClick={toggleTheme}
            className={`w-10 h-10 flex items-center justify-center transition-all ${
              isDark
                ? "border-2 border-[#00ff41] text-[#00ff41]"
                : "bg-gray-100 text-gray-900 rounded-lg"
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`w-10 h-10 flex items-center justify-center transition-all ${
              isDark
                ? "border-2 border-[#00ff41] text-[#00ff41]"
                : "bg-gray-100 text-gray-900 rounded-lg"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`lg:hidden border-t-2 ${
            isDark
              ? "bg-[rgba(13,2,8,0.98)] border-[#00ff41]"
              : "bg-white border-gray-200"
          }`}
        >
          <ul className="px-8 py-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full text-left py-2 transition-all ${
                    isDark
                      ? "text-[#00ff41] hover:[text-shadow:0_0_10px_#00ff41]"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {isDark && "[ "}
                  {link.name}
                  {isDark && " ]"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
