import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SeparacionCanchaService } from './separacion-cancha.service';
import { SeparacionCancha } from './entities/separacion-cancha.entity';
import { CreateSeparacionCanchaInput } from './dto/create-separacion-cancha.input';
import { UpdateSeparacionCanchaInput } from './dto/update-separacion-cancha.input';

@Resolver(() => SeparacionCancha)
export class SeparacionCanchaResolver {
  constructor(private readonly separacionCanchaService: SeparacionCanchaService) {}

  @Mutation(() => SeparacionCancha)
  createSeparacionCancha(@Args('createSeparacionCanchaInput') createSeparacionCanchaInput: CreateSeparacionCanchaInput) {
    return this.separacionCanchaService.create(createSeparacionCanchaInput);
  }

  @Query(() => [SeparacionCancha], { name: 'separacionesCancha' })
  findAll() {
    return this.separacionCanchaService.findAll();
  }

  @Query(() => SeparacionCancha, { name: 'separacionCancha' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.separacionCanchaService.findOne(id);
  }

  @Mutation(() => SeparacionCancha)
  updateSeparacionCancha(
    @Args('id', { type: () => Number }) id: number,
    @Args('updateSeparacionCanchaInput') updateSeparacionCanchaInput: UpdateSeparacionCanchaInput
  ) {
    return this.separacionCanchaService.update(id, updateSeparacionCanchaInput);
  }

  @Mutation(() => SeparacionCancha)
  removeSeparacionCancha(@Args('id', { type: () => Number }) id: number) {
    return this.separacionCanchaService.remove(id);
  }
}
