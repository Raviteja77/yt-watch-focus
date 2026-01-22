import { Card, CardContent, CardMedia, Box } from "@mui/material";
import { Text } from "@/ui/atoms/Text/Text";

export interface VideoCardProps {
  id: string;
  title: string;
  thumbnailUrl: string;
  channelTitle: string;
  views: number;
  postedAt: string;
  onClick?: (id: string) => void;
}

export const VideoCard = ({
  id,
  title,
  thumbnailUrl,
  channelTitle,
  views,
  postedAt,
  onClick,
}: VideoCardProps) => {
  return (
    <Card
      sx={{ cursor: onClick ? "pointer" : "default", height: "100%", display: "flex", flexDirection: "column" }}
      onClick={() => onClick?.(id)}
    >
      <CardMedia component="img" height="180" image={thumbnailUrl} alt={title} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Text variant="subtitle1" fontWeight="bold" gutterBottom>
          {title}
        </Text>
        <Text variant="body2" color="text.secondary">
          {channelTitle}
        </Text>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
          <Text variant="caption" color="text.secondary">
            {views.toLocaleString()} views
          </Text>
          <Text variant="caption" color="text.secondary">
            {postedAt}
          </Text>
        </Box>
      </CardContent>
    </Card>
  );
};
