import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FoodSchema } from './schemas/food.schema';
import { FoodsController } from './foods.controller';
import { FoodsService } from './foods.service';
import { FoodsGateway } from './foods-gateway.gateway';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Food', schema: FoodSchema }])],
  controllers: [FoodsController],
  providers: [FoodsService, FoodsGateway]
})
export class FoodsModule {}
