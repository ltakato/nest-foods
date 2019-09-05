import { IsNotEmpty } from 'class-validator';

export class CreateFoodDto {
  @IsNotEmpty()
  readonly name: string;
}
