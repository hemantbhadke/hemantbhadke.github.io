import { Github, Linkedin, Mail, FileDown, Terminal } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
              <Terminal size={16} className="text-cyan-400" />
              <span className="text-cyan-400">DevOps Engineer</span>
            </div>

            <h1 className="text-white mb-6">
              <span className="block text-5xl sm:text-6xl lg:text-7xl mb-4">
                Hemant Bhadke
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-slate-300">
                Building & Automating Cloud Infrastructure
              </span>
            </h1>

            <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
              Passionate about creating scalable, reliable, and efficient cloud
              solutions. Specializing in CI/CD, containerization, and
              infrastructure as code.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-cyan-500 hover:bg-cyan-600 text-white"
              >
                <Mail size={18} className="mr-2" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                onClick={() => window.open("#", "_blank")}
              >
                <FileDown size={18} className="mr-2" />
                Download CV
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6">
              <a
                href="https://github.com/hemantbhadke"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/hemantbhadke"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:hemant.bhadke@example.com"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full p-1">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full mx-auto"></div>
        </div>
      </motion.div>
    </section>
  );
}
