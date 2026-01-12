import { Injectable } from '@nestjs/common';

@Injectable()
export class YoutubeService {
  getFocusedFeed(params: { userId: string; limit: number }) {
    const { userId, limit } = params;

    // TODO: integrate YouTube Data API
    return {
      userId,
      limit,
      items: [],
    };
  }

  getSubscriptions(userId: string) {
    // TODO: fetch subscriptions
    return [userId];
  }

  getLikedVideos(userId: string) {
    // TODO: fetch liked videos
    return [userId];
  }
}
