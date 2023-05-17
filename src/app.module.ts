import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
    imports: [],
    controllers: [AppController, CustomerController],
    providers: [AppService, CustomerService, PrismaService],
})
export class AppModule {}
