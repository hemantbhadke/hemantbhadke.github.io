import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/hemantbhadke",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/hemantbhadke",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:hemant.bhadke@example.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-slate-400 text-center md:text-left">
              <p className="flex items-center justify-center md:justify-start gap-2">
                Made with{" "}
                <Heart size={16} className="text-cyan-400 fill-cyan-400" /> by
                Hemant Bhadke
              </p>
              <p className="text-sm mt-1">
                © {currentYear} All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-6">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-800">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <a
                href="#about"
                className="hover:text-cyan-400 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:text-cyan-400 transition-colors"
              >
                Skills
              </a>
              <a
                href="#experience"
                className="hover:text-cyan-400 transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="hover:text-cyan-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-cyan-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
