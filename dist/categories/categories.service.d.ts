import { PrismaService } from '../prisma/prisma.service';
export declare class CategoriesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        name: string;
        id: string;
        createdAt: Date;
        slug: string;
    }[]>;
    create(name: string): import("@prisma/client").Prisma.Prisma__CategoryClient<{
        name: string;
        id: string;
        createdAt: Date;
        slug: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
