import { useTheme } from "./ThemeProvider";
import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

export function MatrixExperience() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const experiences = [
    {
      date: isDark ? "[2023-07 - PRESENT]" : "Jul 2023 - Present",
      title: isDark ? "> DEVOPS_ENGINEER" : "DevOps Engineer",
      company: "INFOSYS | CLIENT: RICOH",
      companyClean: "Infosys - Ricoh Client",
      items: [
        "Architected Jenkins CI/CD pipelines for containerized applications",
        "Developed Terraform modules for AWS infrastructure (EKS, VPC, IAM)",
        "Implemented blue-green deployment strategies",
        "Mentored junior engineers on DevOps best practices",
      ],
      current: true,
    },
    {
      date: isDark ? "[2022-06 - 2023-06]" : "Jun 2022 - Jun 2023",
      title: isDark ? "> DEVOPS_ENGINEER" : "DevOps Engineer",
      company: "INFOSYS | CLIENT: SYEMONS_ENERGY",
      companyClean: "Infosys - Syemons Energy Client",
      items: [
        "Led end-to-end setup of Nagios monitoring system",
        "Collaborated with infrastructure and network teams",
        "Automated monitoring configurations using Bash",
        "Reduced MTTR by 60% through proactive alerting",
        "Designed dashboards for incident response",
      ],
      current: false,
    },
  ];

  return (
    <section
      id="experience"
      className={`py-24 px-8 relative ${
        isDark ? "bg-[rgba(0,0,0,0.3)]" : "bg-gray-50"
      }`}
    >
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
          {isDark ? "EXPERIENCE.timeline" : "Work Experience"}
        </motion.h2>

        <div className="relative max-w-[1000px] mx-auto mt-16">
          {/* Timeline Line */}
          <div
            className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 w-1 h-full hidden md:block ${
              isDark
                ? "bg-[#00ff41] [box-shadow:0_0_10px_#00ff41]"
                : "bg-gray-300"
            }`}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative mb-16 last:mb-0"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Date Badge - Desktop */}
                <motion.div
                  className={`absolute left-1/2 -translate-x-1/2 px-6 py-3 whitespace-nowrap z-10 hidden md:block ${
                    isDark
                      ? "bg-[#1a1a1a] text-[#00ff41] border-2 border-[#00ff41] [box-shadow:0_0_15px_rgba(0,255,65,0.5)]"
                      : "bg-white text-gray-900 shadow-xl rounded-lg border-2 border-gray-900"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar size={16} />
                    {exp.date}
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className={`p-8 ${
                    index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                  } ${
                    isDark
                      ? "bg-[#1a1a1a] border-2 border-[#00ff41] [box-shadow:0_0_20px_rgba(0,255,65,0.2)] hover:[box-shadow:0_0_30px_rgba(0,255,65,0.5)]"
                      : "bg-white rounded-xl shadow-lg hover:shadow-2xl"
                  } transition-all`}
                  whileHover={{ y: -5 }}
                >
                  {/* Date - Mobile */}
                  <div
                    className={`md:hidden flex items-center gap-2 text-sm mb-4 ${
                      isDark ? "text-[#00ff41]" : "text-gray-600"
                    }`}
                  >
                    <Calendar size={16} />
                    {exp.date}
                  </div>

                  {/* Current Badge */}
                  {exp.current && (
                    <div
                      className={`inline-block px-3 py-1 text-xs mb-4 ${
                        isDark
                          ? "bg-[#00ff41] text-black"
                          : "bg-green-500 text-white rounded-full"
                      }`}
                    >
                      Current Role
                    </div>
                  )}

                  {/* Title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className={`p-2 rounded-lg flex-shrink-0 ${
                        isDark
                          ? "bg-[#00ff41]/10 text-[#00ff41]"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3
                        className={`text-xl mb-2 ${
                          isDark
                            ? "text-[#00ff41] [text-shadow:0_0_10px_#00ff41]"
                            : "text-gray-900"
                        }`}
                        dangerouslySetInnerHTML={{ __html: exp.title }}
                      />
                      <h4
                        className={`${
                          isDark ? "text-[#39ff14]" : "text-gray-600"
                        }`}
                      >
                        {isDark ? exp.company : exp.companyClean}
                      </h4>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-3 mt-6">
                    {exp.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.2 + itemIndex * 0.1,
                        }}
                        className={`pl-6 relative ${
                          isDark ? "text-[#39ff14]" : "text-gray-700"
                        }`}
                      >
                        <span
                          className={`absolute left-0 ${
                            isDark ? "text-[#00ff41]" : "text-blue-500"
                          }`}
                        >
                          {isDark ? ">" : "•"}
                        </span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Decorative corner - dark mode only */}
                  {isDark && (
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#00ff41] opacity-30" />
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}