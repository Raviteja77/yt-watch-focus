import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YoutubeModule } from "./youtube/youtube.module";
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [YoutubeModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
