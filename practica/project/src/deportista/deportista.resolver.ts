import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { DeportistaService } from './deportista.service';
import { Deportista } from './entities/deportista.entity';
import { CreateDeportistaInput } from './dto/create-deportista.input';
import { UpdateDeportistaInput } from './dto/update-deportista.input';

@Resolver(() => Deportista)
export class DeportistaResolver {
  constructor(private readonly deportistaService: DeportistaService) {}

  @Mutation(() => Deportista)
  async createDeportista(@Args('createDeportistaInput') createDeportistaInput: CreateDeportistaInput): Promise<Deportista> {
    return this.deportistaService.create(createDeportistaInput);
  }

  @Query(() => [Deportista], { name: 'deportistas' })
  async findAll(): Promise<Deportista[]> {
    return this.deportistaService.findAll();
  }

  @Query(() => Deportista, { name: 'deportista' })
  async findOne(@Args('id', { type: () => ID }) id: number): Promise<Deportista> {
    return this.deportistaService.findOne(id);
  }

  @Mutation(() => Deportista)
  async updateDeportista(
    @Args('id', { type: () => ID }) id: number,
    @Args('updateDeportistaInput') updateDeportistaInput: UpdateDeportistaInput
  ): Promise<Deportista> {
    return this.deportistaService.update(id, updateDeportistaInput);
  }

  @Mutation(() => Deportista)
  async removeDeportista(@Args('id', { type: () => ID }) id: number): Promise<void> {
    this.deportistaService.remove(id);
    return null;
  }
}
