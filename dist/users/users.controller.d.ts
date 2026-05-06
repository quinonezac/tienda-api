import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        name: string;
        id: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
    }[]>;
    sync(body: {
        firebaseUid: string;
        email: string;
        name: string;
    }): import("@prisma/client").Prisma.Prisma__UserClient<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        firebaseUid: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        phone: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
