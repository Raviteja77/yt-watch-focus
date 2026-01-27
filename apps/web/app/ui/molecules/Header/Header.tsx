import { Box } from "@mui/material";
import { Text } from "@/ui/atoms/Text/Text";
import { Button } from "@/ui/atoms/Button/Button";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Text variant="h5" component="h1" fontWeight="bold">
        {title}
      </Text>
    </Box>
  );
};
