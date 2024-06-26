import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CanchaService } from './cancha.service';
import { Cancha } from './entities/cancha.entity';
import { CreateCanchaInput } from './dto/create-cancha.input';
import { UpdateCanchaInput } from './dto/update-cancha.input';
import { ParseIntPipe } from '@nestjs/common';

@Resolver(() => Cancha)
export class CanchaResolver {
  constructor(private readonly canchaService: CanchaService) {}

  @Mutation(() => Cancha)
  async createCancha(@Args('createCanchaInput') createCanchaInput: CreateCanchaInput): Promise<Cancha> {
    return this.canchaService.create(createCanchaInput);
  }

  @Query(() => [Cancha], { name: 'canchas' })
  async findAll(): Promise<Cancha[]> {
    return this.canchaService.findAll();
  }

  @Query(() => Cancha, { name: 'cancha' })
  async findOne(@Args('id', { type: () => Int }, ParseIntPipe) id: number): Promise<Cancha> {
    return this.canchaService.findOne(id);
  }

  @Mutation(() => Cancha)
  async updateCancha(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateCanchaInput') updateCanchaInput: UpdateCanchaInput
  ): Promise<Cancha> {
    return this.canchaService.update(id, updateCanchaInput);
  }

  @Mutation(() => Cancha)
  async removeCancha(@Args('id', { type: () => Int }) id: number): Promise<void> {
    await this.canchaService.remove(id);
  }
}
