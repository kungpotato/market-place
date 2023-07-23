// src/user/entities/user.entity.ts
import { Field, ObjectType } from '@nestjs/graphql';
import { Post } from '../../post/entities/post.entity';

@ObjectType()
export class User {
  @Field()
  readonly id: number;

  @Field()
  readonly email: string;

  @Field({ nullable: true })
  readonly name?: string;

  @Field(() => [Post], { nullable: true })
  readonly posts?: Post[];
}
