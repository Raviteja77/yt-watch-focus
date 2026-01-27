import { FeedVideoDto } from "../dto/feed.dto";

export function mapYoutubeVideoToFeed(
  video: any, // external API boundary
): FeedVideoDto {
  return {
    id: video.id,
    title: video.snippet.title,
    channelTitle: video.snippet.channelTitle,
    thumbnailUrl: video.snippet.thumbnails?.medium?.url ?? "",
    publishedAt: video.snippet.publishedAt,
    duration: video.contentDetails?.duration,
  };
}
