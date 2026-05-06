import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        name: string;
        id: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
    }[]>;
    findByFirebaseUid(firebaseUid: string): import("@prisma/client").Prisma.Prisma__UserClient<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        firebaseUid: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        phone: string | null;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    create(data: {
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
    sync(data: {
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
