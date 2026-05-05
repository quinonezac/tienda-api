import { IsString, IsNumber, IsArray, IsOptional, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsNumber()
  @Min(0)
  stock: number;

  @IsArray()
  @IsOptional()
  images: string[] = [];

  @IsString()
  categoryId: string;

  @IsString()
  @IsOptional()
  sellerId: string;
}