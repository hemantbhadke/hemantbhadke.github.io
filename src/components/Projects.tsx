import { ExternalLink, Github } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Multi-Cloud Infrastructure Automation",
      description:
        "Developed a comprehensive Terraform module library for provisioning infrastructure across AWS, Azure, and GCP with consistent patterns and best practices.",
      image: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGluZnJhc3RydWN0dXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjMwMzU0NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Terraform", "AWS", "Azure", "GCP", "Python"],
      github: "https://github.com/hemantbhadke",
      live: "#",
      highlights: [
        "Reduced infrastructure provisioning time by 60%",
        "Implemented state management with remote backends",
        "Created reusable modules for VPC, EKS, AKS, and GKE",
      ],
    },
    {
      title: "Kubernetes GitOps Platform",
      description:
        "Built a complete GitOps platform using ArgoCD, enabling declarative application deployment and management across multiple Kubernetes clusters.",
      image: "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZGVwbG95bWVudCUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzYzMDM1NDY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["ArgoCD", "Kubernetes", "Helm", "GitLab", "Kustomize"],
      github: "https://github.com/hemantbhadke",
      live: "#",
      highlights: [
        "Automated deployment for 80+ microservices",
        "Implemented progressive delivery with Argo Rollouts",
        "Created custom health checks and sync waves",
      ],
    },
    {
      title: "Comprehensive Monitoring Stack",
      description:
        "Designed and deployed a full observability stack with Prometheus, Grafana, and ELK for monitoring infrastructure and application metrics.",
      image: "https://images.unsplash.com/photo-1762163516269-3c143e04175c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NjMwMzU0NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: [
        "Prometheus",
        "Grafana",
        "Elasticsearch",
        "Logstash",
        "Kibana",
      ],
      github: "https://github.com/hemantbhadke",
      live: "#",
      highlights: [
        "Created 50+ custom Grafana dashboards",
        "Configured alerting rules with PagerDuty integration",
        "Implemented log aggregation for distributed systems",
      ],
    },
    {
      title: "CI/CD Pipeline Automation",
      description:
        "Developed a standardized CI/CD pipeline framework supporting multiple programming languages and deployment targets with security scanning integration.",
      image: "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZGVwbG95bWVudCUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzYzMDM1NDY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Jenkins", "GitLab CI", "SonarQube", "Trivy", "Nexus"],
      github: "https://github.com/hemantbhadke",
      live: "#",
      highlights: [
        "Integrated SAST and DAST security scanning",
        "Automated container image vulnerability scanning",
        "Reduced pipeline execution time by 50%",
      ],
    },
    {
      title: "Infrastructure Cost Optimization Tool",
      description:
        "Created an automated tool for analyzing and optimizing cloud infrastructure costs across multiple providers with recommendations and automated actions.",
      image: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGluZnJhc3RydWN0dXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjMwMzU0NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Python", "AWS Cost Explorer", "Azure Cost Management"],
      github: "https://github.com/hemantbhadke",
      live: "#",
      highlights: [
        "Identified potential savings of $50K+ annually",
        "Automated right-sizing recommendations",
        "Generated weekly cost reports with anomaly detection",
      ],
    },
    {
      title: "Disaster Recovery Automation",
      description:
        "Implemented automated backup and disaster recovery solutions with cross-region replication and automated failover capabilities.",
      image: "https://images.unsplash.com/photo-1762163516269-3c143e04175c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NjMwMzU0NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["AWS", "Terraform", "Ansible", "Velero", "Restic"],
      github: "https://github.com/hemantbhadke",
      live: "#",
      highlights: [
        "Achieved RPO of 1 hour and RTO of 4 hours",
        "Automated backup testing and validation",
        "Implemented cross-region Kubernetes backup",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-white text-xl mb-3">{project.title}</h3>
                  <p className="text-slate-300 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-white text-sm mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="text-slate-400 text-sm flex items-start"
                        >
                          <span className="text-cyan-400 mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                      onClick={() => window.open(project.live, "_blank")}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
