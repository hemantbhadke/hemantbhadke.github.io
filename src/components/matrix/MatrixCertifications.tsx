import { useTheme } from "./ThemeProvider";
import { motion } from "motion/react";
import { Award, Calendar, Hash } from "lucide-react";

export function MatrixCertifications() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const certifications = [
    {
      badge: "🏆",
      color: "from-yellow-400 to-orange-500",
      issuer: isDark ? "[ORACLE]" : "Oracle",
      name: "Cloud Infrastructure 2025 DevOps Professional",
      date: "2025-09-17",
      id: "322432197OCI25DOPOCP",
    },
    {
      badge: "🎖️",
      color: "from-red-400 to-red-600",
      issuer: isDark ? "[RED_HAT]" : "Red Hat",
      name: "Linux Fundamentals (RH104)",
      date: "2025-09-19",
      id: "VERSION: 9.1 | 16 HRS",
    },
    {
      badge: "🎓",
      color: "from-blue-400 to-blue-600",
      issuer: isDark ? "[INFOSYS]" : "Infosys",
      name: "Kubernetes Administrator - Associate",
      date: "2024",
      id: "",
    },
    {
      badge: "⚙️",
      color: "from-purple-400 to-purple-600",
      issuer: isDark ? "[INFOSYS]" : "Infosys",
      name: "Ansible Automation Associate",
      date: "2024",
      id: "",
    },
  ];

  return (
    <section id="certifications" className="py-24 px-8 relative">
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
          {isDark ? "CERTIFICATIONS.log" : "Certifications"}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`p-6 text-center relative group ${
                isDark
                  ? "bg-[#1a1a1a] border-2 border-[#00ff41] [box-shadow:0_0_20px_rgba(0,255,65,0.2)] hover:[box-shadow:0_0_40px_rgba(0,255,65,0.6)]"
                  : "bg-white rounded-xl shadow-lg hover:shadow-2xl"
              } before:content-[''] before:absolute before:inset-[-2px] before:bg-[#00ff41] before:opacity-0 before:transition-opacity before:z-[-1] ${
                isDark ? "hover:before:opacity-10" : ""
              }`}
            >
              {/* Badge */}
              <motion.div
                className={`w-24 h-24 mx-auto mb-4 flex items-center justify-center text-5xl relative ${
                  isDark
                    ? "border-2 border-[#00ff41] [box-shadow:0_0_20px_rgba(0,255,65,0.3)]"
                    : `bg-gradient-to-br ${cert.color} text-white rounded-2xl shadow-lg`
                }`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {isDark ? (
                  cert.badge
                ) : (
                  <Award size={40} className="text-white" />
                )}
              </motion.div>

              {/* Issuer */}
              <div
                className={`text-sm mb-3 ${
                  isDark ? "text-[#39ff14]" : "text-gray-600"
                }`}
              >
                {cert.issuer}
              </div>

              {/* Certificate Name */}
              <h3
                className={`text-base mb-3 min-h-[3rem] ${
                  isDark ? "text-[#00ff41]" : "text-gray-900"
                }`}
              >
                {cert.name}
              </h3>

              {/* Date */}
              <div
                className={`flex items-center justify-center gap-2 text-sm mb-3 ${
                  isDark ? "text-[#008f11]" : "text-gray-600"
                }`}
              >
                <Calendar size={14} />
                {cert.date}
              </div>

              {/* ID */}
              {cert.id && (
                <div
                  className={`text-xs p-2 ${
                    isDark
                      ? "bg-[rgba(0,255,65,0.05)] border border-[#008f11] text-[#39ff14]"
                      : "bg-gray-50 text-gray-600 rounded"
                  } flex items-start gap-2`}
                >
                  <Hash size={12} className="mt-0.5 flex-shrink-0" />
                  <span className="break-all">{cert.id}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
