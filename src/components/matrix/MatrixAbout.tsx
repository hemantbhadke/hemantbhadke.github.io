import { useTheme } from "./ThemeProvider";
import { motion } from "motion/react";
import aboutImage1 from "figma:asset/fb2026e197331a9ea20aaa947a3df7008af2dbaf.png";
import aboutImage2 from "figma:asset/5dfd7fc9ea4f412550d11b763f99b10454e2bc67.png";

export function MatrixAbout() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="about" className="py-24 px-8 relative">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-4xl md:text-5xl text-center mb-12 ${
            isDark
              ? "text-[#00ff41] [text-shadow:0_0_20px_rgba(0,255,65,0.8)] before:content-['//_']"
              : "text-gray-900"
          } after:content-[''] after:block after:w-[100px] after:h-[3px] after:mx-auto after:mt-4 ${
            isDark
              ? "after:bg-[#00ff41] after:[box-shadow:0_0_10px_#00ff41]"
              : "after:bg-gray-900"
          }`}
        >
          {isDark ? "ABOUT.exe" : "About Me"}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div
              className="col-span-2 relative group overflow-hidden rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={aboutImage1}
                alt="Hemant Bhadke - Professional"
                className={`w-full h-[320px] object-cover ${
                  isDark
                    ? "border-2 border-[#00ff41] [box-shadow:0_0_20px_rgba(0,255,65,0.3)] contrast-[1.2] brightness-[1.1]"
                    : "shadow-xl"
                }`}
              />
              {!isDark && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </motion.div>

            <motion.div
              className="relative group overflow-hidden rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={aboutImage2}
                alt="Hemant Bhadke - Casual"
                className={`w-full h-[280px] object-cover ${
                  isDark
                    ? "border-2 border-[#00ff41] [box-shadow:0_0_20px_rgba(0,255,65,0.3)] contrast-[1.2] brightness-[1.1]"
                    : "shadow-xl"
                }`}
              />
              {!isDark && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </motion.div>

            <motion.div
              className={`flex items-center justify-center rounded-xl ${
                isDark
                  ? "bg-[#1a1a1a] border-2 border-[#00ff41]"
                  : "bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center p-6">
                <div
                  className={`text-5xl mb-2 ${
                    isDark ? "text-[#00ff41]" : "text-gray-900"
                  }`}
                >
                  3+
                </div>
                <div
                  className={`text-sm ${
                    isDark ? "text-[#39ff14]" : "text-gray-600"
                  }`}
                >
                  Years of
                  <br />
                  Experience
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3
              className={`text-2xl md:text-3xl mb-6 ${
                isDark
                  ? "text-[#00ff41] [text-shadow:0_0_10px_#00ff41] before:content-['>_']"
                  : "text-gray-900"
              }`}
            >
              {isDark ? "SYSTEM_PROFILE" : "Professional Profile"}
            </h3>

            <div
              className={`space-y-4 text-lg ${
                isDark ? "text-[#39ff14]" : "text-gray-700"
              }`}
            >
              <p className="leading-relaxed">
                {isDark && <span className="mr-2 text-[#00ff41]">&gt;</span>}
                Results-driven DevOps Engineer with{" "}
                <strong
                  className={isDark ? "text-[#00ff41]" : "text-gray-900"}
                >
                  3+ years of experience
                </strong>{" "}
                at Infosys, delivering innovative solutions for enterprise
                clients.
              </p>

              <p className="leading-relaxed">
                {isDark && <span className="mr-2 text-[#00ff41]">&gt;</span>}
                Specializing in{" "}
                <strong
                  className={isDark ? "text-[#00ff41]" : "text-gray-900"}
                >
                  cloud-native solutions, CI/CD automation, and infrastructure
                  as code
                </strong>
                , with expertise in AWS, Azure, and GCP platforms.
              </p>

              <p className="leading-relaxed">
                {isDark && <span className="mr-2 text-[#00ff41]">&gt;</span>}
                Background in Environmental Engineering - applying{" "}
                <strong
                  className={isDark ? "text-[#00ff41]" : "text-gray-900"}
                >
                  sustainable systems thinking
                </strong>{" "}
                to cloud infrastructure design and optimization.
              </p>

              <p className="leading-relaxed">
                {isDark && <span className="mr-2 text-[#00ff41]">&gt;</span>}
                Led cross-functional teams,{" "}
                <strong
                  className={isDark ? "text-[#00ff41]" : "text-gray-900"}
                >
                  reduced MTTR by 60%
                </strong>
                , and architected CI/CD pipelines for major clients including
                Ricoh and Harley-Davidson.
              </p>

              <div
                className={`mt-8 p-6 rounded-lg ${
                  isDark
                    ? "bg-[#1a1a1a] border-2 border-[#00ff41]"
                    : "bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg"
                }`}
              >
                <p className="mb-2">
                  <strong className={isDark ? "text-[#00ff41]" : "text-gray-900"}>
                    {isDark && <span className="mr-2">&gt;</span>}
                    LOCATION:
                  </strong>
                </p>
                <p className={isDark ? "text-[#39ff14]" : "text-gray-700"}>
                  📍 Amravati, Maharashtra, India
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}