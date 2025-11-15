import { Briefcase, Calendar } from "lucide-react";
import { Card } from "./ui/card";

export function Experience() {
  const experiences = [
    {
      title: "Senior DevOps Engineer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Leading DevOps initiatives for enterprise-level applications, managing cloud infrastructure across AWS and Azure.",
      achievements: [
        "Reduced deployment time by 70% through automated CI/CD pipelines",
        "Migrated legacy applications to containerized microservices architecture",
        "Implemented Infrastructure as Code using Terraform, managing 100+ resources",
        "Established monitoring and alerting systems reducing downtime by 85%",
      ],
      technologies: [
        "AWS",
        "Kubernetes",
        "Terraform",
        "Jenkins",
        "Docker",
        "Prometheus",
      ],
    },
    {
      title: "DevOps Engineer",
      company: "Cloud Innovations Ltd.",
      period: "2020 - 2022",
      description:
        "Designed and implemented CI/CD pipelines, automated infrastructure provisioning, and managed containerized applications.",
      achievements: [
        "Architected and deployed Kubernetes clusters serving 50+ microservices",
        "Automated infrastructure provisioning reducing setup time from days to hours",
        "Implemented GitOps workflow using ArgoCD for declarative deployments",
        "Created comprehensive monitoring dashboards using Grafana and Prometheus",
      ],
      technologies: [
        "Azure",
        "Docker",
        "Ansible",
        "GitLab CI",
        "Helm",
        "ELK Stack",
      ],
    },
    {
      title: "Junior DevOps Engineer",
      company: "StartupHub Technologies",
      period: "2018 - 2020",
      description:
        "Supported infrastructure operations, automated routine tasks, and assisted in cloud migration projects.",
      achievements: [
        "Automated deployment processes using Shell and Python scripts",
        "Maintained Linux servers and performed regular security updates",
        "Assisted in migrating on-premise applications to AWS cloud",
        "Created documentation for deployment and maintenance procedures",
      ],
      technologies: ["AWS", "Linux", "Bash", "Python", "GitHub Actions", "Nginx"],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 sm:p-8 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="mb-2 sm:mb-0">
                    <h3 className="text-white text-xl mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-cyan-400">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-slate-300 mb-4">{exp.description}</p>

                <div className="mb-4">
                  <h4 className="text-white mb-2">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="text-slate-300 flex items-start"
                      >
                        <span className="text-cyan-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
