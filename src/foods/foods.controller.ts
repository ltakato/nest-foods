import { Controller, Post, Body, Get, HttpException } from '@nestjs/common';

import { CreateFoodDto } from './dto/create-food-dto';
import { FoodsService } from './foods.service';
import { Food } from './interfaces/food.interface';
import { FoodsGateway } from './foods-gateway.gateway';

@Controller('foods')
export class FoodsController {
  constructor(
    private readonly foodsService: FoodsService,
    private readonly foodsGateway: FoodsGateway,
  ) {}

  @Get()
  async findAll(): Promise<Food[]> {
    return this.foodsService.findAll();
  }

  @Post()
  async create(@Body() createFoodDto: CreateFoodDto) {
    try {
      await this.foodsService.create(createFoodDto);

      this.foodsGateway.broadCast(createFoodDto);
    } catch (e) {
      return new HttpException('Falha ao criar', 400);
    }
  }
}
