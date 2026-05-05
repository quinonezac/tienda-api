import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany({
      select: { id: true, name: true, email: true, role: true }
    });
  }

  findByFirebaseUid(firebaseUid: string) {
    return this.prisma.user.findUnique({ where: { firebaseUid } });
  }

  create(data: { firebaseUid: string; email: string; name: string }) {
    return this.prisma.user.create({ data });
  }

  sync(data: { firebaseUid: string; email: string; name: string }) {
    return this.prisma.user.upsert({
      where: { firebaseUid: data.firebaseUid },
      update: { email: data.email, name: data.name },
      create: data,
    });
  }
}