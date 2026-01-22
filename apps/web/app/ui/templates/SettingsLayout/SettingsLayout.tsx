import { ReactNode } from "react";
import { Box, Container } from "@mui/material";
import { NavigationBar } from "@/ui/organisms/NavigationBar/NavigationBar";
import { Footer } from "@/ui/organisms/Footer/Footer";
import { Text } from "@/ui/atoms/Text/Text";

interface SettingsLayoutProps {
  children: ReactNode;
  onSearch?: (query: string) => void;
  onLogout?: () => void;
}

export const SettingsLayout = ({ children, onSearch = () => {}, onLogout }: SettingsLayoutProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavigationBar onSearch={onSearch} />
      <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
        <Container maxWidth="md">
          <Text variant="h4" component="h1" gutterBottom fontWeight="bold" sx={{ mb: 4 }}>Settings</Text>
          {children}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};
