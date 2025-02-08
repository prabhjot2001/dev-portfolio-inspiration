import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "@/App.tsx";
import RootLayout from "@/layout/root-layout.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
   <BrowserRouter basename="/dev-portfolio-inspiration">
      <main className="backdrop-blur-md">
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeProvider
          defaultTheme="dark"
          storageKey="dev-portfolio-inspiration-theme"
        >
          <TooltipProvider>
            <RootLayout>
              <App />
            </RootLayout>
          </TooltipProvider>
        </ThemeProvider>
      </main>
    </BrowserRouter>
  </StrictMode>
);
