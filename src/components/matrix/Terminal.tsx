import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function Terminal() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<Array<{ text: string; type: string }>>([
    { text: "> SYSTEM INITIALIZED...", type: "info" },
    { text: "> TYPE 'help' FOR AVAILABLE COMMANDS", type: "info" },
    { text: " ", type: "info" },
  ]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, string> = {
    help: `AVAILABLE_COMMANDS:
  help          - Display this message
  about         - System profile
  skills        - Technical skills
  certifications- View certifications
  experience    - Work history
  projects      - View projects
  contact       - Contact information
  clear         - Clear terminal
  whoami        - Current user
  date          - System date
  pwd           - Working directory
  ls            - List files
  neofetch      - System info`,

    about: `SYSTEM_PROFILE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
&gt; NAME: Hemant Bhadke
&gt; ROLE: DevOps Engineer
&gt; LOCATION: Amravati, Maharashtra, IN
&gt; EXPERIENCE: 3+ years @ Infosys
&gt; SPECIALIZATION: CI/CD, K8s, Terraform, AWS
&gt; STATUS: [OPERATIONAL]`,

    skills: `TECHNICAL_SKILLS:
━━━━━━━━━━━━━━━━━━
[CLOUD] AWS | Azure | GCP | Oracle Cloud
[DEVOPS] Jenkins | Terraform | Docker | Kubernetes
[MONITORING] Nagios | Prometheus | Grafana | ELK
[INFRASTRUCTURE] EKS | VPC | IAM | LoadBalancers
[OS] CentOS | Ubuntu | Windows Server`,

    certifications: `CERTIFICATIONS_LOG:
━━━━━━━━━━━━━━━━━━━━━━━━
[1] Oracle Cloud Infrastructure 2025 DevOps Pro
    DATE: 2025-09-17 | ID: 322432197OCI25DOPOCP

[2] Red Hat Linux Fundamentals (RH104)
    DATE: 2025-09-19 | HOURS: 16

[3] Infosys Kubernetes Administrator - Associate
    DATE: 2024

[4] Infosys Ansible Automation Associate
    DATE: 2024`,

    experience: `WORK_HISTORY:
━━━━━━━━━━━━━━━━━━
[CURRENT] DevOps Engineer @ Infosys (Ricoh)
  PERIOD: 2023-07 to PRESENT
  &gt; Architected Jenkins CI/CD pipelines
  &gt; Terraform modules for AWS infrastructure
  &gt; Led Harley-Davidson cloud automation

[PREVIOUS] DevOps Engineer @ Infosys (Syemons)  
  PERIOD: 2022-06 to 2023-06
  &gt; Nagios monitoring system setup
  &gt; Reduced MTTR by 60%`,

    projects: `PROJECTS_DIRECTORY:
━━━━━━━━━━━━━━━━━━
[1] HARLEY_DAVIDSON_CLOUD_AUTOMATION
[2] DISASTER_RECOVERY_AUTOMATION
[3] SELF_SERVICE_AWS_PORTAL
[4] ENTERPRISE_MONITORING_SYSTEM`,

    contact: `CONTACT_INFO:
━━━━━━━━━━━━━━━━━━
EMAIL: hemantrbhadke@gmail.com
LINKEDIN: linkedin.com/in/hemantrbhadke
PHONE: +91-9766670282`,

    whoami: "hemant",
    date: "&gt; " + new Date().toString(),
    pwd: "/home/hemant/portfolio",
    ls: `total 12
-rw-r--r-- 1 hemant hemant  123 Nov 02 resume.pdf
-rw-r--r-- 1 hemant hemant  456 Nov 02 projects.md
-rw-r--r-- 1 hemant hemant  789 Nov 02 skills.yml
-rw-r--r-- 1 hemant hemant  234 Nov 02 certs.txt
drwxr-xr-x 2 hemant hemant 4096 Nov 02 aws-configs/
drwxr-xr-x 2 hemant hemant 4096 Nov 02 terraform-modules/
drwxr-xr-x 2 hemant hemant 4096 Nov 02 jenkins-pipelines/`,

    neofetch: `
    ╔══════════════════════╗
    ║  HEMANT_BHADKE.SYS   ║
    ╚══════════════════════╝
    
    OS: DevOps_Engineer_v3.0
    Kernel: Cloud_Native
    Uptime: 3+ years
    Shell: bash/zsh
    IDE: vim/vscode
    Cloud: AWS/Azure/GCP
    Tools: Jenkins/Terraform/K8s
    Status: [OPERATIONAL]`,
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();

    if (!trimmedInput) return;

    // Add command to output
    setOutput((prev) => [
      ...prev,
      { text: `[HEMANT@DEVOPS]~$ ${trimmedInput}`, type: "command" },
    ]);

    // Process command
    if (trimmedInput.toLowerCase() === "clear") {
      setOutput([]);
    } else if (commands[trimmedInput.toLowerCase()]) {
      const response = commands[trimmedInput.toLowerCase()];
      response.split("\n").forEach((line) => {
        setOutput((prev) => [...prev, { text: line, type: "info" }]);
      });
      setOutput((prev) => [...prev, { text: " ", type: "info" }]);
    } else {
      setOutput((prev) => [
        ...prev,
        { text: `ERROR: Command '${trimmedInput}' not found`, type: "error" },
        { text: "Type 'help' for available commands", type: "info" },
        { text: " ", type: "info" },
      ]);
    }

    // Update history
    setHistory((prev) => [...prev, trimmedInput]);
    setHistoryIndex(-1);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex =
          historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= history.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(history[newIndex]);
        }
      }
    }
  };

  return (
    <>
      {/* Float Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
          }
        }}
        className="fixed bottom-[30px] right-[30px] w-[60px] h-[60px] bg-[#1a1a1a] border-2 border-[#00ff41] text-[#00ff41] text-2xl cursor-pointer [box-shadow:0_0_20px_rgba(0,255,65,0.5)] z-[999] flex items-center justify-center transition-all hover:scale-110 hover:[box-shadow:0_0_40px_rgba(0,255,65,0.8)] animate-pulse"
        aria-label="Toggle Terminal"
      >
        <TerminalIcon size={28} />
      </button>

      {/* Terminal Window */}
      {isOpen && (
        <div className="fixed bottom-[20px] right-[20px] w-[95%] md:w-[600px] h-[450px] bg-black border-2 border-[#00ff41] [box-shadow:0_0_30px_rgba(0,255,65,0.5)] z-[1001] flex flex-col animate-slideIn">
          {/* Header */}
          <div className="bg-[#1a1a1a] px-4 py-3 flex justify-between items-center border-b-2 border-[#00ff41]">
            <span className="text-[#00ff41] text-sm [text-shadow:0_0_10px_#00ff41]">
              [HEMANT@DEVOPS]~$
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="w-3 h-3 border border-[#00ff41] hover:bg-[#00ff41] transition-colors"
                aria-label="Close"
              />
              <button
                className="w-3 h-3 border border-[#00ff41] hover:bg-[#00ff41] transition-colors"
                aria-label="Minimize"
              />
              <button
                className="w-3 h-3 border border-[#00ff41] hover:bg-[#00ff41] transition-colors"
                aria-label="Maximize"
              />
            </div>
          </div>

          {/* Output */}
          <div
            ref={outputRef}
            className="flex-1 p-4 overflow-y-auto text-sm leading-relaxed scrollbar-thin scrollbar-thumb-[#00ff41] scrollbar-track-black"
          >
            {output.map((line, index) => (
              <div
                key={index}
                className={`mb-1 ${
                  line.type === "command"
                    ? "text-white"
                    : line.type === "error"
                    ? "text-red-500 [text-shadow:0_0_5px_#ff0000]"
                    : "text-[#00ff41]"
                }`}
              >
                {line.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="bg-black px-4 py-3 flex items-center gap-2 border-t-2 border-[#00ff41]"
          >
            <span className="text-[#00ff41]">[HEMANT@DEVOPS]~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none text-[#00ff41] text-sm outline-none placeholder:text-[rgba(0,255,65,0.4)]"
              placeholder="enter command..."
              autoComplete="off"
            />
          </form>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-track-black::-webkit-scrollbar-track {
          background: #000000;
        }
        .scrollbar-thumb-\\[\\#00ff41\\]::-webkit-scrollbar-thumb {
          background: #00ff41;
        }
      `}</style>
    </>
  );
}