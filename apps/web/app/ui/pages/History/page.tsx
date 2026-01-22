"use client";

import { Box } from "@mui/material";
import { MainLayout } from "@/ui/templates";
import { VideoFeed } from "@/ui/organisms";
import { Text } from "@/ui/atoms";

const HISTORY_VIDEOS = [
  {
    id: "4",
    title: "The Art of Minimalist Living",
    thumbnailUrl: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800&q=80",
    channelTitle: "Simple Life",
    views: 8900,
    postedAt: "Watched 2 hours ago",
  },
];

export const History = () => {
  return (
    <MainLayout>
      <Box sx={{ mb: 4, px: 2 }}>
        <Text variant="h4" component="h1" fontWeight="bold">
          Watch History
        </Text>
        <Text variant="body1" color="text.secondary" sx={{ mt: 1 }}>
          Videos you have watched recently.
        </Text>
      </Box>
      <VideoFeed videos={HISTORY_VIDEOS} />
    </MainLayout>
  );
};
