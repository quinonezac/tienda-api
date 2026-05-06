import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(category?: string, search?: string): Promise<({
        category: {
            name: string;
            id: string;
            createdAt: Date;
            slug: string;
        };
        seller: {
            name: string;
            id: string;
            phone: string | null;
        };
    } & {
        name: string;
        description: string;
        price: number;
        stock: number;
        images: string[];
        categoryId: string;
        sellerId: string;
        id: string;
        isActive: boolean;
        views: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        category: {
            name: string;
            id: string;
            createdAt: Date;
            slug: string;
        };
        seller: {
            name: string;
            id: string;
            phone: string | null;
        };
    } & {
        name: string;
        description: string;
        price: number;
        stock: number;
        images: string[];
        categoryId: string;
        sellerId: string;
        id: string;
        isActive: boolean;
        views: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(dto: CreateProductDto): Promise<{
        category: {
            name: string;
            id: string;
            createdAt: Date;
            slug: string;
        };
    } & {
        name: string;
        description: string;
        price: number;
        stock: number;
        images: string[];
        categoryId: string;
        sellerId: string;
        id: string;
        isActive: boolean;
        views: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, dto: Partial<CreateProductDto>): Promise<{
        name: string;
        description: string;
        price: number;
        stock: number;
        images: string[];
        categoryId: string;
        sellerId: string;
        id: string;
        isActive: boolean;
        views: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        name: string;
        description: string;
        price: number;
        stock: number;
        images: string[];
        categoryId: string;
        sellerId: string;
        id: string;
        isActive: boolean;
        views: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
