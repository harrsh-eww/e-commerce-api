import { Injectable } from '@nestjs/common';
import { Prisma, customer } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CustomerService {
    constructor(private prisma: PrismaService) {}

    async getCustomer(
        customerUniqueWhereInput: Prisma.customerWhereUniqueInput,
    ): Promise<customer | null> {
        return this.prisma.customer.findUnique({
            where: customerUniqueWhereInput,
        });
    }

    async createCustomer(data: Prisma.customerCreateInput) {
        return this.prisma.customer.create({
            data,
        });
    }
}
