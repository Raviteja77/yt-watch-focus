"use client";

import { ReactNode } from "react";
import { Box } from "@mui/material";
import { NavigationBar } from "@/ui/organisms/NavigationBar/NavigationBar";
import { Footer } from "@/ui/organisms/Footer/Footer";

interface MainLayoutProps {
  children: ReactNode;
  onSearch?: (query: string) => void;
  onLogout?: () => void;
}

export const MainLayout = ({ children, onSearch = () => {}, onLogout }: MainLayoutProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavigationBar onSearch={onSearch} />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
