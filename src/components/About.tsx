import { Code2, Cpu, Zap, Shield } from "lucide-react";
import { Card } from "./ui/card";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Automation Expert",
      description: "Proficient in scripting and automation tools to streamline workflows",
    },
    {
      icon: Cpu,
      title: "Cloud Native",
      description: "Experienced in AWS, Azure, and GCP cloud platforms",
    },
    {
      icon: Zap,
      title: "CI/CD Specialist",
      description: "Building robust pipelines for continuous integration and deployment",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Implementing DevSecOps practices to ensure secure deployments",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-slate-300 text-lg mb-4">
                I'm a DevOps Engineer with a passion for building and maintaining
                robust, scalable cloud infrastructure. With expertise in
                containerization, orchestration, and automation, I help teams
                deliver software faster and more reliably.
              </p>
              <p className="text-slate-300 text-lg mb-4">
                My approach combines deep technical knowledge with a focus on
                collaboration and continuous improvement. I believe in creating
                solutions that not only work but are maintainable, scalable, and
                secure.
              </p>
              <p className="text-slate-300 text-lg">
                When I'm not automating infrastructure or optimizing pipelines,
                you'll find me exploring new cloud technologies, contributing to
                open-source projects, or sharing knowledge with the community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
                  >
                    <Icon className="text-cyan-400 mb-3" size={32} />
                    <h3 className="text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
