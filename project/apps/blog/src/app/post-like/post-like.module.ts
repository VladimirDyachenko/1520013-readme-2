import { Module } from '@nestjs/common';
import { PostLikeService } from './post-like.service';
import { PostLikeRepository } from './post-like.repository';

@Module({
  providers: [PostLikeService, PostLikeRepository],
  controllers: [],
  exports: [PostLikeService],
})
export class PostLikeModule {}
