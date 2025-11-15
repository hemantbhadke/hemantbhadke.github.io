import { useTheme } from "./ThemeProvider";
import { motion } from "motion/react";
import {
  Cloud,
  Settings,
  Activity,
  Network,
  Server,
  Shield,
} from "lucide-react";

export function MatrixSkills() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const skills = [
    {
      icon: Cloud,
      iconEmoji: "☁️",
      title: isDark ? "CLOUD_PLATFORMS" : "Cloud Platforms",
      items: [
        "Amazon Web Services (AWS)",
        "Microsoft Azure",
        "Google Cloud Platform (GCP)",
        "Oracle Cloud Infrastructure",
      ],
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Settings,
      iconEmoji: "🔧",
      title: isDark ? "DEVOPS_TOOLS" : "DevOps Tools",
      items: [
        "Jenkins CI/CD",
        "Terraform (IaC)",
        "Docker & Kubernetes",
        "Git & GitHub",
        "Ansible Automation",
      ],
      color: "from-orange-400 to-red-500",
    },
    {
      icon: Activity,
      iconEmoji: "📊",
      title: isDark ? "MONITORING_STACK" : "Monitoring Stack",
      items: [
        "Nagios",
        "Prometheus & Grafana",
        "ELK Stack",
        "AWS CloudWatch",
      ],
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Network,
      iconEmoji: "🌐",
      title: isDark ? "INFRASTRUCTURE" : "Infrastructure",
      items: [
        "EKS/AKS/GKE Clusters",
        "VPC & Networking",
        "Load Balancers",
        "IAM & Security Groups",
        "EC2, S3, Lambda",
      ],
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Server,
      iconEmoji: "🖥️",
      title: isDark ? "SERVERS_OS" : "Servers & OS",
      items: ["Apache Tomcat", "NGINX", "CentOS & Ubuntu", "Windows Server"],
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Shield,
      iconEmoji: "🔐",
      title: isDark ? "BEST_PRACTICES" : "Best Practices",
      items: [
        "Blue-Green Deployments",
        "Infrastructure as Code",
        "Disaster Recovery",
        "Security & Compliance",
        "Cost Optimization",
      ],
      color: "from-red-400 to-pink-500",
    },
  ];

  return (
    <section id="skills" className="py-24 px-8 relative">
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
          {isDark ? "SKILLS.json" : "Technical Skills"}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`p-6 relative group ${
                  isDark
                    ? "bg-[#1a1a1a] border-2 border-[#00ff41] border-l-4 [box-shadow:0_0_20px_rgba(0,255,65,0.2)] hover:[box-shadow:0_0_40px_rgba(0,255,65,0.5)]"
                    : "bg-white rounded-xl shadow-lg hover:shadow-2xl"
                }`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-3 rounded-lg ${
                      isDark
                        ? "bg-[#00ff41]/10 text-[#00ff41]"
                        : `bg-gradient-to-br ${skill.color} text-white shadow-lg`
                    }`}
                  >
                    {isDark ? (
                      <span className="text-2xl">{skill.iconEmoji}</span>
                    ) : (
                      <Icon size={24} />
                    )}
                  </div>
                  <h3
                    className={`text-lg ${
                      isDark
                        ? "text-[#00ff41] [text-shadow:0_0_10px_#00ff41]"
                        : "text-gray-900"
                    }`}
                  >
                    {skill.title}
                  </h3>
                </div>

                {/* Skills List */}
                <ul className="space-y-3">
                  {skill.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                      className={`flex items-start ${
                        isDark ? "text-[#39ff14]" : "text-gray-700"
                      }`}
                    >
                      <span
                        className={`mr-2 mt-1 ${
                          isDark ? "text-[#00ff41]" : "text-gray-400"
                        }`}
                      >
                        {isDark ? ">" : "•"}
                      </span>
                      <span className="flex-1">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Decorative corner - dark mode only */}
                {isDark && (
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#00ff41] opacity-50" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}