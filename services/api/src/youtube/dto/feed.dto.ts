/**
 * Represents a single video item in the focused feed
 * This DTO is shared across Web & Mobile
 */
export class FeedVideoDto {
  id: string;
  title: string;
  channelTitle: string;
  thumbnailUrl: string;
  publishedAt: string;
  duration?: string;
}

/**
 * API response for GET /youtube/feed
 */
export class FeedResponseDto {
  userId: string;
  items: FeedVideoDto[];
}

/**
 * Query params for feed endpoint
 */
export class FeedQueryDto {
  limit?: number;
}
