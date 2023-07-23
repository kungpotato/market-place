import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { UserService } from './user/user.service'
import { PostService } from './post/post.service'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { UserResolver } from './user/user.resolver'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
  ],
  controllers: [],
  providers: [PrismaService, UserService, PostService, UserResolver],
})
export class AppModule {}
