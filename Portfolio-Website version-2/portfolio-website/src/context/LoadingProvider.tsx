import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";

interface LoadingType {
  isLoading: boolean;
  loadingPercent: number; // Changed from setLoading and setIsLoading
}

export const LoadingContext = createContext<LoadingType | undefined>(undefined); // Changed type and initial value

export const LoadingProvider = ({ children }: { children: ReactNode }) => { // Changed PropsWithChildren to { children: ReactNode }
  const [isLoading, setIsLoading] = useState(true);
  const [loadingPercent, setLoadingPercent] = useState(0); // Renamed loading to loadingPercent and setLoading to setLoadingPercent

  useEffect(() => {
    // Add dummy loading progression if not hooked into actual resources yet
    if (isLoading) {
      let currentPercent = 0;
      const interval = setInterval(() => {
        currentPercent += Math.floor(Math.random() * 15) + 5;
        if (currentPercent >= 100) {
          currentPercent = 100;
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500); // Small delay at 100%
        }
        setLoadingPercent(currentPercent);
      }, 300);
      
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <LoadingContext.Provider value={{ isLoading, loadingPercent }}> {/* Updated value object */}
      {children} {/* Removed Loading component and main-body div */}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
