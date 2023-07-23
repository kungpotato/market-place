import { Controller, Get, Body, Post } from '@nestjs/common'
import { UserService } from './user/user.service'
import { PostService } from './post/post.service'
import { Post as PostModel, User as UserModel } from '@prisma/client'

@Controller()
export class AppController {
  constructor(
    private readonly userService: UserService,
    private readonly postService: PostService
  ) {}

  @Post('graphql/user')
  async createUser(
    @Body() userData: { name?: string; email: string }
  ): Promise<UserModel> {
    return this.userService.create(userData)
  }

  @Post('graphql/post')
  async createPost(
    @Body()
    postData: {
      title: string
      content?: string
      published?: boolean
      authorId: number
    }
  ): Promise<PostModel> {
    return this.postService.create(postData)
  }
}
