import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

export function Skills() {
  const skillCategories = [
    {
      category: "Cloud Platforms",
      skills: [
        { name: "AWS", level: 90 },
        { name: "Azure", level: 85 },
        { name: "Google Cloud", level: 75 },
        { name: "DigitalOcean", level: 80 },
      ],
    },
    {
      category: "Containers & Orchestration",
      skills: [
        { name: "Docker", level: 95 },
        { name: "Kubernetes", level: 90 },
        { name: "Helm", level: 85 },
        { name: "Docker Compose", level: 90 },
      ],
    },
    {
      category: "CI/CD Tools",
      skills: [
        { name: "Jenkins", level: 90 },
        { name: "GitLab CI", level: 85 },
        { name: "GitHub Actions", level: 88 },
        { name: "ArgoCD", level: 80 },
      ],
    },
    {
      category: "Infrastructure as Code",
      skills: [
        { name: "Terraform", level: 92 },
        { name: "Ansible", level: 88 },
        { name: "CloudFormation", level: 80 },
        { name: "Pulumi", level: 70 },
      ],
    },
    {
      category: "Monitoring & Logging",
      skills: [
        { name: "Prometheus", level: 85 },
        { name: "Grafana", level: 87 },
        { name: "ELK Stack", level: 82 },
        { name: "Datadog", level: 78 },
      ],
    },
    {
      category: "Programming & Scripting",
      skills: [
        { name: "Python", level: 88 },
        { name: "Bash", level: 92 },
        { name: "Go", level: 75 },
        { name: "YAML/JSON", level: 95 },
      ],
    },
  ];

  const tools = [
    "Git",
    "Linux",
    "Nginx",
    "Apache",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "RabbitMQ",
    "Kafka",
    "Vault",
    "Consul",
    "Istio",
    "Envoy",
    "Sonarqube",
    "Nexus",
    "Artifactory",
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all"
              >
                <h3 className="text-white mb-4">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300">{skill.name}</span>
                        <span className="text-cyan-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-white text-xl mb-6">
              Additional Tools & Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 text-cyan-400 border-cyan-500/50 hover:bg-cyan-500/10 transition-colors"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
