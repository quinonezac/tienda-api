import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.category.findMany({ orderBy: { name: 'asc' } });
  }

  create(name: string) {
    const slug = name.toLowerCase().replace(/\s+/g, '-');
    return this.prisma.category.create({ data: { name, slug } });
  }
}