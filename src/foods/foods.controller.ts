import { Controller, Post, Body, Get } from '@nestjs/common';

import { CreateFoodDto } from './dto/create-food-dto';
import { FoodsService } from './foods.service';
import { Food } from './interfaces/food.interface';

@Controller('foods')
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}

  @Get()
  async findAll(): Promise<Food[]> {
    return this.foodsService.findAll();
  }

  @Post()
  async create(@Body() createFoodDto: CreateFoodDto) {
    this.foodsService.create(createFoodDto);
  }
}
