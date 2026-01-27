import { Box } from "@mui/material";
import { Text } from "@/ui/atoms/Text/Text";
import { Button } from "@/ui/atoms/Button/Button";

interface EmptyStateProps {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const EmptyState = ({ title, description, actionLabel, onAction }: EmptyStateProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 8,
        textAlign: "center",
      }}
    >
      <Text variant="h6" gutterBottom>
        {title}
      </Text>
      {description && (
        <Text variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          {description}
        </Text>
      )}
      {actionLabel && onAction && (
        <Button variant="contained" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </Box>
  );
};
