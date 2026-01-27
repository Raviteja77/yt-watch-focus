import { Injectable } from "@nestjs/common";
import { google, youtube_v3 } from "googleapis";

@Injectable()
export class YoutubeService {
  private youtube: youtube_v3.Youtube;

  private createClient(accessToken: string) {
    const auth = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
    );

    auth.setCredentials({ access_token: accessToken });

    this.youtube = google.youtube({
      version: "v3",
      auth,
    });
  }

  async getSubscriptions(accessToken: string) {
    this.createClient(accessToken);

    const response = await this.youtube.subscriptions.list({
      part: ["snippet"],
      mine: true,
      maxResults: 50,
    });

    return response.data.items ?? [];
  }

  async getLikedVideos(accessToken: string) {
    this.createClient(accessToken);

    const response = await this.youtube.videos.list({
      part: ["snippet", "contentDetails"],
      myRating: "like",
      maxResults: 25,
    });

    return response.data.items ?? [];
  }
}
