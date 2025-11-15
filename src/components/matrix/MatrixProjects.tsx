import { useTheme } from "./ThemeProvider";
import { motion } from "motion/react";
import { Folder, ExternalLink } from "lucide-react";

export function MatrixProjects() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const projects = [
    {
      title: isDark
        ? "> HARLEY_DAVIDSON_AUTOMATION"
        : "Harley-Davidson Cloud Automation",
      description:
        "Designed and implemented comprehensive Jenkins CI/CD pipelines for microservices deployment on AWS, integrating Git workflows and automated testing for reliable deployments.",
      tags: ["Jenkins", "Terraform", "AWS", "Microservices"],
      tagsDark: ["[JENKINS]", "[TERRAFORM]", "[AWS]", "[MICROSERVICES]"],
      color: "from-orange-400 to-red-500",
    },
    {
      title: isDark
        ? "> DISASTER_RECOVERY_AUTO"
        : "Disaster Recovery Automation",
      description:
        "Automated AMI snapshots and S3 archiving using Lambda and CloudWatch Events, achieving a 50% reduction in Recovery Time Objective (RTO).",
      tags: ["Lambda", "CloudWatch", "S3", "Automation"],
      tagsDark: ["[LAMBDA]", "[CLOUDWATCH]", "[S3]", "[AUTOMATION]"],
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: isDark ? "> SELF_SERVICE_PORTAL" : "Self-Service AWS Portal",
      description:
        "Built a Jenkins + Terraform solution enabling developers to provision isolated AWS environments on demand, improving team velocity and reducing manual provisioning time.",
      tags: ["Jenkins", "Terraform", "Self-Service", "Portal"],
      tagsDark: ["[JENKINS]", "[TERRAFORM]", "[SELF-SERVICE]", "[PORTAL]"],
      color: "from-purple-400 to-pink-500",
    },
    {
      title: isDark
        ? "> ENTERPRISE_MONITORING"
        : "Enterprise Monitoring System",
      description:
        "Established robust Nagios monitoring across production and staging environments, with custom service checks and automated alerting workflows.",
      tags: ["Nagios", "Monitoring", "Bash", "Alerting"],
      tagsDark: ["[NAGIOS]", "[MONITORING]", "[BASH]", "[ALERTING]"],
      color: "from-green-400 to-emerald-500",
    },
  ];

  return (
    <section id="projects" className="py-24 px-8 relative">
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
          {isDark ? "PROJECTS.dir" : "Featured Projects"}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`p-8 relative group overflow-hidden ${
                isDark
                  ? "bg-[#1a1a1a] border-2 border-[#00ff41] [box-shadow:0_0_20px_rgba(0,255,65,0.2)] hover:[box-shadow:0_0_40px_rgba(0,255,65,0.6)] before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-[linear-gradient(90deg,transparent,rgba(0,255,65,0.1),transparent)] before:transition-[left] before:duration-500 hover:before:left-[100%]"
                  : "bg-white rounded-xl shadow-lg hover:shadow-2xl"
              }`}
            >
              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`p-3 rounded-lg flex-shrink-0 ${
                    isDark
                      ? "bg-[#00ff41]/10 text-[#00ff41]"
                      : `bg-gradient-to-br ${project.color} text-white shadow-lg`
                  }`}
                >
                  <Folder size={28} />
                </div>
                <h3
                  className={`text-xl md:text-2xl ${
                    isDark
                      ? "text-[#00ff41] [text-shadow:0_0_10px_#00ff41]"
                      : "text-gray-900"
                  }`}
                  dangerouslySetInnerHTML={{ __html: project.title }}
                />
              </div>

              {/* Description */}
              <p
                className={`leading-relaxed mb-6 ${
                  isDark ? "text-[#39ff14]" : "text-gray-700"
                }`}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {(isDark ? project.tagsDark : project.tags).map(
                  (tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 text-sm ${
                        isDark
                          ? "bg-transparent text-[#00ff41] border border-[#00ff41]"
                          : `bg-gradient-to-r ${project.color} text-white rounded-full shadow`
                      }`}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              {/* View Project Link - Light mode only */}
              {!isDark && (
                <motion.div
                  className="mt-6 flex items-center gap-2 text-blue-600 cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <span>View Details</span>
                  <ExternalLink size={16} />
                </motion.div>
              )}

              {/* Decorative elements */}
              {isDark && (
                <>
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#00ff41] opacity-30" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#00ff41] opacity-30" />
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
