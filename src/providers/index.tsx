import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "./theme.provider";
import { AuthProvider } from "./auth.provider";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </AuthProvider>
  );
};

export default Providers;
