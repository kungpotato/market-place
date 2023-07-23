import { Field, ObjectType } from '@nestjs/graphql'
import { User } from '../../user/entities/user.entity'

@ObjectType()
export class Post {
  @Field()
  readonly id: number

  @Field()
  readonly title: string

  @Field({ nullable: true })
  readonly content?: string

  @Field()
  readonly published: boolean

  @Field(() => User)
  readonly author: User
}
