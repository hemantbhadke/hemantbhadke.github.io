import { ThemeProvider } from "./components/matrix/ThemeProvider";
import { PortfolioContent } from "./components/matrix/PortfolioContent";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
      <Toaster />
    </ThemeProvider>
  );
}
