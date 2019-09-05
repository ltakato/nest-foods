import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Food } from './interfaces/food.interface';
import { CreateFoodDto } from './dto/create-food-dto';
import { FoodsGateway } from './foods-gateway.gateway';

@Injectable()
export class FoodsService {
  constructor(@InjectModel('Food') private readonly foodModel: Model<Food>) {}

  async create(createFoodDto: CreateFoodDto): Promise<Food> {
    const createdFood = new this.foodModel(createFoodDto);

    return await createdFood.save();
  }

  async findAll(): Promise<Food[]> {
    return await this.foodModel.find();
  }
}
