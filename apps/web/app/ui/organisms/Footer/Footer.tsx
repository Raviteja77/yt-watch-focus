import { Box, Container } from "@mui/material";
import { Text } from "@/ui/atoms/Text/Text";

export const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, mt: "auto", backgroundColor: "background.paper", borderTop: 1, borderColor: "divider" }}>
      <Container maxWidth="lg">
        <Text variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} FocusTube. Stay Focused.
        </Text>
      </Container>
    </Box>
  );
};
