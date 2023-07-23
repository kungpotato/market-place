// src/user/user.resolver.ts
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserDTO } from './dto/create-user.dto';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  async users() {
    return this.userService.findAll();
  }

  @Query(() => User, { nullable: true })
  async user(@Args('id') id: number) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  async createUser(@Args('data') data: CreateUserDTO) {
    return this.userService.create(data);
  }

  // add update, delete mutations as needed
}
