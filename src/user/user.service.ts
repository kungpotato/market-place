import { Injectable } from '@nestjs/common'

import { User } from '@prisma/client'
import { PrismaService } from '../prisma/prisma.service'
import { CreateUserDTO } from './dto/create-user.dto'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDTO): Promise<User> {
    const newUser = await this.prisma.user.create({
      data,
      include: { posts: true },
    })

    return newUser
  }

  async findOne(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
      include: { posts: true },
    })
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({ include: { posts: true } })
  }
}
