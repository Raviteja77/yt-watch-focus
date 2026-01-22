import { ReactNode } from "react";
import { Box, Container, Paper } from "@mui/material";
import { Text } from "@/ui/atoms/Text/Text";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
}

export const AuthLayout = ({ children, title }: AuthLayoutProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        py: 4,
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={3}
          sx={{ p: 4, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}
        >
          <Text variant="h4" component="h1" fontWeight="bold" align="center">
            {title}
          </Text>
          {children}
        </Paper>
      </Container>
    </Box>
  );
};
