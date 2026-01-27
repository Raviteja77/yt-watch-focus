import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { YoutubeService } from "./youtube.service";
import { FirebaseAuthGuard } from "../auth/firebase-auth.guard";

@Controller("youtube")
@UseGuards(FirebaseAuthGuard)
export class YoutubeController {
  constructor(private readonly youtubeService: YoutubeService) {}

  @Get("subscriptions")
  async subscriptions(@Req() req: any) {
    return this.youtubeService.getSubscriptions(req.user.googleAccessToken);

  }

  @Get("liked-videos")
  async likedVideos(@Req() req: any) {
    return this.youtubeService.getLikedVideos(req.user.googleAccessToken);
  }

   @Get("feed")
  getFeed(@Req() req: any) {
    return {
      user: req.user, // ✅ available
    };
  }
}
