import { Injectable } from "@nestjs/common";
import { google, youtube_v3 } from "googleapis";

@Injectable()
export class YoutubeDataService {
  private youtube: youtube_v3.Youtube;

  constructor() {
    this.youtube = google.youtube({
      version: "v3",
      auth: process.env.YOUTUBE_API_KEY,
    });
  }

  async getSubscriptions() {
    const response = await this.youtube.subscriptions.list({
      part: ["snippet"],
      mine: false,
      maxResults: 50,
    });

    return response.data.items ?? [];
  }

  async getLikedVideos() {
    const response = await this.youtube.videos.list({
      part: ["snippet", "contentDetails"],
      myRating: "like",
      maxResults: 50,
    });

    return response.data.items ?? [];
  }
}