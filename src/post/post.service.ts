import { Injectable } from '@nestjs/common'

import { Post, Prisma } from '@prisma/client'
import { PrismaService } from '../prisma/prisma.service'
import { CreatePostDTO } from './dto/create-post.dto'

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePostDTO): Promise<Post> {
    const newPost = await this.prisma.post.create({
      data,
      include: { author: true },
    })

    return newPost
  }

  async findOne(id: number): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: { id },
      include: { author: true },
    })
  }

  async findAll(): Promise<Post[]> {
    return this.prisma.post.findMany({ include: { author: true } })
  }
}
