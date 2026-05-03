import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async findAll(categoryId?: string, search?: string) {
    return this.prisma.product.findMany({
      where: {
        isActive: true,
        ...(categoryId && { categoryId }),
        ...(search && {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
          ],
        }),
      },
      include: { category: true, seller: { select: { id: true, name: true, phone: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: { category: true, seller: { select: { id: true, name: true, phone: true } } },
    });
    if (!product) throw new NotFoundException('Producto no encontrado');

    // Incrementar vistas
    await this.prisma.product.update({
      where: { id },
      data: { views: { increment: 1 } },
    });
    return product;
  }

  async create(dto: CreateProductDto, sellerId: string) {
    return this.prisma.product.create({
      data: { ...dto, sellerId },
      include: { category: true },
    });
  }

  async update(id: string, dto: Partial<CreateProductDto>) {
    return this.prisma.product.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    return this.prisma.product.update({
      where: { id },
      data: { isActive: false },
    });
  }
}