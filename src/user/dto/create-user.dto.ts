import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateUserDTO {
  @Field()
  readonly email: string

  @Field({ nullable: true })
  readonly name?: string
}
