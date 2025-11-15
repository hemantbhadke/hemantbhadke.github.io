import { useTheme } from "./ThemeProvider";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function MatrixFooter() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-12 px-8 border-t-2 ${
        isDark
          ? "bg-black text-[#00ff41] border-[#00ff41]"
          : "bg-gray-900 text-white border-gray-700"
      }`}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3
              className={`text-2xl mb-4 ${
                isDark
                  ? "text-[#00ff41] [text-shadow:0_0_10px_#00ff41] before:content-['>_']"
                  : "text-white"
              }`}
            >
              {isDark ? "HEMANT.SYS" : "Hemant Bhadke"}
            </h3>
            <p
              className={`text-sm ${
                isDark ? "text-[#39ff14]" : "text-gray-400"
              }`}
            >
              DevOps Engineer specializing in cloud infrastructure, CI/CD
              automation, and scalable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className={`mb-4 ${
                isDark ? "text-[#00ff41]" : "text-white"
              }`}
            >
              {isDark ? "[QUICK_LINKS]" : "Quick Links"}
            </h4>
            <ul className={`space-y-2 text-sm ${isDark ? "text-[#39ff14]" : "text-gray-400"}`}>
              {["About", "Skills", "Experience", "Projects", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className={`hover:${
                        isDark ? "text-[#00ff41]" : "text-white"
                      } transition-colors ${isDark ? "before:content-['>_']" : ""}`}
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4
              className={`mb-4 ${
                isDark ? "text-[#00ff41]" : "text-white"
              }`}
            >
              {isDark ? "[CONNECT]" : "Connect"}
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/hemantbhadke"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center transition-all ${
                  isDark
                    ? "border-2 border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black"
                    : "bg-gray-800 text-white hover:bg-gray-700 rounded-lg"
                }`}
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/hemantrbhadke"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center transition-all ${
                  isDark
                    ? "border-2 border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black"
                    : "bg-gray-800 text-white hover:bg-gray-700 rounded-lg"
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hemantrbhadke@gmail.com"
                className={`w-10 h-10 flex items-center justify-center transition-all ${
                  isDark
                    ? "border-2 border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black"
                    : "bg-gray-800 text-white hover:bg-gray-700 rounded-lg"
                }`}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`pt-8 border-t ${
            isDark ? "border-[#00ff41]/30" : "border-gray-700"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-sm ${isDark ? "text-[#39ff14]" : "text-gray-400"}`}>
              {isDark && <span className="mr-2">&gt;</span>}
              © {currentYear} HEMANT_BHADKE{isDark && ".SYS"} | {isDark ? "BUILD_VERSION: 1.0.0 | STATUS: OPERATIONAL" : "All rights reserved"}
            </p>
            <p className={`text-sm flex items-center gap-2 ${isDark ? "text-[#39ff14]" : "text-gray-400"}`}>
              {!isDark && (
                <>
                  Made with <Heart size={14} className="text-red-500" /> by Hemant
                </>
              )}
              {isDark && <span>&gt; System running smoothly...</span>}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}