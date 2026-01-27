"use client";

import { Grid, Container, Box } from "@mui/material";
import { VideoCard, VideoCardProps } from "@/ui/molecules/VideoCard/VideoCard";
import { Loader } from "@/ui/atoms/Loader/Loader";
import { EmptyState } from "@/ui/molecules/EmptyState/EmptyState";

interface VideoFeedProps {
  videos: VideoCardProps[];
  isLoading?: boolean;
  onVideoClick?: (id: string) => void;
}

export const VideoFeed = ({ videos, isLoading, onVideoClick }: VideoFeedProps) => {
  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 5 }}>
        <Loader />
      </Box>
    );
  }

  if (!videos.length) {
    return <EmptyState title="No videos found" description="Try adjusting your search terms." />;
  }

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Grid container spacing={3}>
        {videos.map((video) => (
          <Grid item key={video.id} xs={12} sm={6} md={4} lg={3}>
            <VideoCard {...video} onClick={onVideoClick} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
