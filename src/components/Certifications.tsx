import { Award, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function Certifications() {
  const certifications = [
    {
      name: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-PSA-12345",
      status: "Active",
      link: "#",
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      credentialId: "CKA-67890",
      status: "Active",
      link: "#",
    },
    {
      name: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      date: "2022",
      credentialId: "HCP-TF-54321",
      status: "Active",
      link: "#",
    },
    {
      name: "AWS Certified DevOps Engineer - Professional",
      issuer: "Amazon Web Services",
      date: "2022",
      credentialId: "AWS-DOP-98765",
      status: "Active",
      link: "#",
    },
    {
      name: "Microsoft Certified: Azure DevOps Engineer Expert",
      issuer: "Microsoft",
      date: "2022",
      credentialId: "MS-AZ400-24680",
      status: "Active",
      link: "#",
    },
    {
      name: "Certified Kubernetes Security Specialist (CKS)",
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      credentialId: "CKS-13579",
      status: "Active",
      link: "#",
    },
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-6 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <Award className="text-cyan-400" size={32} />
                  <Badge
                    variant="outline"
                    className="border-green-500/50 text-green-400"
                  >
                    {cert.status}
                  </Badge>
                </div>

                <h3 className="text-white mb-2">{cert.name}</h3>
                <p className="text-slate-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-slate-500 text-sm mb-3">Issued: {cert.date}</p>

                <div className="mb-4">
                  <p className="text-slate-400 text-xs">
                    Credential ID: {cert.credentialId}
                  </p>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
