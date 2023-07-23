import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreatePostDTO {
  @Field()
  readonly title: string

  @Field({ nullable: true })
  readonly content?: string

  @Field()
  readonly published?: boolean

  @Field()
  readonly authorId: number
}
