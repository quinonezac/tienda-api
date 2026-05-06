import { CategoriesService } from './categories.service';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        name: string;
        id: string;
        createdAt: Date;
        slug: string;
    }[]>;
    create(body: {
        name: string;
    }): import("@prisma/client").Prisma.Prisma__CategoryClient<{
        name: string;
        id: string;
        createdAt: Date;
        slug: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
