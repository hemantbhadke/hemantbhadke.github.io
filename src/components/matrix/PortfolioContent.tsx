import { useTheme } from "./ThemeProvider";
import { MatrixNav } from "./MatrixNav";
import { MatrixHero } from "./MatrixHero";
import { MatrixAbout } from "./MatrixAbout";
import { MatrixCertifications } from "./MatrixCertifications";
import { MatrixSkills } from "./MatrixSkills";
import { MatrixExperience } from "./MatrixExperience";
import { MatrixProjects } from "./MatrixProjects";
import { MatrixContact } from "./MatrixContact";
import { MatrixFooter } from "./MatrixFooter";
import { MatrixRain } from "./MatrixRain";
import { Terminal } from "./Terminal";

export function PortfolioContent() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen font-mono relative overflow-x-hidden transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#0d0208] text-[#00ff41]"
          : "bg-white text-gray-900"
      }`}
    >
      {/* Matrix Rain - only in dark mode */}
      {theme === "dark" && <MatrixRain />}

      {/* Scanline Effect - only in dark mode */}
      {theme === "dark" && (
        <div
          className="fixed inset-0 pointer-events-none z-[1]"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              rgba(0, 255, 65, 0.03) 0px,
              transparent 1px,
              transparent 2px,
              rgba(0, 255, 65, 0.03) 3px
            )`,
          }}
        />
      )}

      {/* Grid Pattern - only in light mode */}
      {theme === "light" && (
        <div
          className="fixed inset-0 pointer-events-none z-[1] opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      )}

      <div className="relative z-[2]">
        <MatrixNav />
        <main>
          <MatrixHero />
          <MatrixAbout />
          <MatrixCertifications />
          <MatrixSkills />
          <MatrixExperience />
          <MatrixProjects />
          <MatrixContact />
        </main>
        <MatrixFooter />
      </div>

      <Terminal />
    </div>
  );
}
