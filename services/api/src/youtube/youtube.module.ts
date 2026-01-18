import { Module } from "@nestjs/common";
import { YoutubeController } from "./youtube.controller";
import { YoutubeService } from "./youtube.service";
import { YoutubeDataService } from "./youtube-data.service";

@Module({
  controllers: [YoutubeController],
  providers: [YoutubeService, YoutubeDataService],
})
export class YoutubeModule {}
