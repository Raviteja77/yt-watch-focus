import { Controller, Get, Query, UseGuards, Req } from '@nestjs/common';

import { Request } from 'express';
import { YoutubeService } from './youtube.service';
import { AuthGuard } from '../auth/auth.guard';

/**
 * Shape of user injected by AuthGuard
 */
interface AuthenticatedRequest extends Request {
  user: {
    id: string;
    email?: string;
  };
}

@Controller('youtube')
@UseGuards(AuthGuard)
export class YoutubeController {
  constructor(private readonly youtubeService: YoutubeService) {}

  /**
   * Get focused YouTube feed
   * Applies filtering rules:
   * - No Shorts
   * - Preferred channels
   * - Preferred topics
   */
  @Get('feed')
  getFocusedFeed(
    @Req() req: AuthenticatedRequest,
    @Query('limit') limit = '20',
  ) {
    const userId = req.user.id;

    return this.youtubeService.getFocusedFeed({
      userId,
      limit: Number(limit),
    });
  }

  /**
   * Get user subscriptions (non‑short content only)
   */
  @Get('subscriptions')
  getSubscriptions(@Req() req: AuthenticatedRequest) {
    return this.youtubeService.getSubscriptions(req.user.id);
  }

  /**
   * Get liked videos (used for preference learning)
   */
  @Get('liked')
  getLikedVideos(@Req() req: AuthenticatedRequest) {
    return this.youtubeService.getLikedVideos(req.user.id);
  }
}
