import { FC } from "react";
import { MainLayout } from "@/ui/templates/MainLayout/MainLayout";
import { VideoFeed } from "@/ui/organisms/VideoFeed/VideoFeed";

const MOCK_VIDEOS = [
  {
    id: "1",
    title: "Focus on What Matters",
    thumbnailUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80",
    channelTitle: "Productivity Master",
    views: 15000,
    postedAt: "2 days ago",
  },
  {
    id: "2",
    title: "Deep Work Music",
    thumbnailUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    channelTitle: "Focus Flow",
    views: 1200000,
    postedAt: "1 year ago",
  },
  {
    id: "3",
    title: "The Art of Coding",
    thumbnailUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
    channelTitle: "Creative Minds",
    views: 8900,
    postedAt: "3 weeks ago",
  },
];

export const Home: FC = () => {
  return (
    <MainLayout>
      <VideoFeed videos={MOCK_VIDEOS} />
    </MainLayout>
  );
};
