import { FC, StrictMode } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import App from "./App";

interface ContextProps {
  children: ReturnType<typeof App>;
}

const Context: FC<ContextProps> = ({ children }) => {
  return (
    <StrictMode>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </StrictMode>
  );
};

export default Context;
