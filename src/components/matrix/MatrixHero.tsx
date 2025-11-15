import { motion } from "motion/react";
import { useTheme } from "./ThemeProvider";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import profileImage from "figma:asset/fa20687b58c80a07dbf649cb804c051b47103ec2.png";

export function MatrixHero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-8 px-8 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {isDark ? (
          <>
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff41]/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#008f11]/10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </>
        ) : (
          <>
            <motion.div
              className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-purple-100 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </>
        )}
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`text-lg mb-4 ${
                isDark ? "text-[#39ff14]" : "text-gray-600"
              }`}
            >
              {isDark && <span className="mr-2">&gt;</span>}
              Hello, I'm
            </motion.div>

            <h1
              className={`text-5xl md:text-6xl lg:text-7xl mb-4 ${
                isDark
                  ? "text-[#00ff41] [text-shadow:0_0_20px_rgba(0,255,65,0.8)] animate-[glitch_3s_infinite]"
                  : "text-gray-900 font-bold"
              }`}
            >
              {isDark ? "HEMANT_BHADKE" : "Hemant Bhadke"}
            </h1>

            <div
              className={`text-2xl md:text-3xl lg:text-4xl mb-8 ${
                isDark
                  ? "text-[#39ff14] [text-shadow:0_0_10px_#00ff41] before:content-['>_']"
                  : "text-gray-700"
              }`}
            >
              {isDark ? "DEVOPS_ENGINEER" : "DevOps Engineer"}
            </div>

            <div
              className={`text-lg mb-8 space-y-2 opacity-90 ${
                isDark ? "text-[#39ff14]" : "text-gray-600"
              }`}
            >
              <p>
                {isDark && <span className="mr-2">&gt;</span>}
                Architecting scalable cloud infrastructure
              </p>
              <p>
                {isDark && <span className="mr-2">&gt;</span>}
                Automating deployment pipelines
              </p>
              <p>
                {isDark && <span className="mr-2">&gt;</span>}
                Building robust CI/CD systems
              </p>
              <p>
                {isDark && <span className="mr-2">&gt;</span>}
                Optimizing cloud operations
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://github.com/hemantbhadke"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 transition-all ${
                  isDark
                    ? "border-2 border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black"
                    : "bg-gray-900 text-white hover:bg-gray-700 rounded-lg"
                }`}
              >
                <Github size={20} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/hemantrbhadke"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 transition-all ${
                  isDark
                    ? "border-2 border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black"
                    : "bg-blue-600 text-white hover:bg-blue-700 rounded-lg"
                }`}
              >
                <Linkedin size={20} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="mailto:hemantrbhadke@gmail.com"
                className={`flex items-center gap-2 px-4 py-2 transition-all ${
                  isDark
                    ? "border-2 border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200 rounded-lg"
                }`}
              >
                <Mail size={20} />
                <span className="hidden sm:inline">Email</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className={`px-8 py-4 relative overflow-hidden group transition-all ${
                  isDark
                    ? "border-2 border-[#00ff41] text-[#00ff41] hover:[box-shadow:0_0_20px_rgba(0,255,65,0.8)] before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-[#00ff41] before:transition-[left] before:duration-300 hover:before:left-0 hover:text-black before:z-[-1]"
                    : "bg-gray-900 text-white hover:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl"
                }`}
              >
                {isDark ? "[CONNECT]" : "Get in Touch"}
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`px-8 py-4 relative overflow-hidden group transition-all ${
                  isDark
                    ? "border-2 border-[#00ff41] text-[#00ff41] hover:[box-shadow:0_0_20px_rgba(0,255,65,0.8)] before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-[#00ff41] before:transition-[left] before:duration-300 hover:before:left-0 hover:text-black before:z-[-1]"
                    : "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-lg"
                }`}
              >
                <Download size={20} className="inline mr-2" />
                {isDark ? "[PROJECTS]" : "View Projects"}
              </button>
            </div>
          </motion.div>

          {/* Profile Image with Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative max-w-[500px] mx-auto">
              {/* Decorative elements */}
              <motion.div
                className={`absolute -inset-4 rounded-full ${
                  isDark
                    ? "bg-gradient-to-r from-[#00ff41]/20 to-[#008f11]/20"
                    : "bg-gradient-to-r from-blue-200 to-purple-200"
                } blur-2xl`}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="relative">
                <img
                  src={profileImage}
                  alt="Hemant Bhadke"
                  className={`w-full h-auto rounded-2xl object-cover mx-auto relative z-10 ${
                    isDark
                      ? "border-3 border-[#00ff41] [box-shadow:0_0_30px_rgba(0,255,65,0.5)] contrast-[1.2] brightness-[1.1]"
                      : "shadow-2xl"
                  }`}
                />

                {/* Corner accents */}
                {isDark && (
                  <>
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#00ff41] -translate-x-2 -translate-y-2" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#00ff41] translate-x-2 -translate-y-2" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#00ff41] -translate-x-2 translate-y-2" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#00ff41] translate-x-2 translate-y-2" />
                  </>
                )}
              </div>

              {/* Floating badge */}
              <motion.div
                className={`absolute -bottom-4 -right-4 px-6 py-3 ${
                  isDark
                    ? "bg-[#1a1a1a] border-2 border-[#00ff41] text-[#00ff41] [box-shadow:0_0_20px_rgba(0,255,65,0.5)]"
                    : "bg-white shadow-xl rounded-lg border-2 border-gray-900 text-gray-900"
                }`}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-sm">3+ Years</div>
                <div className="text-xs opacity-75">Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollToSection("about")}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 ${
          isDark ? "text-[#00ff41]" : "text-gray-900"
        }`}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.button>

      <style>{`
        @keyframes glitch {
          0%, 98% { transform: translate(0); }
          99% { transform: translate(-2px, 2px); }
          100% { transform: translate(2px, -2px); }
        }
      `}</style>
    </section>
  );
}