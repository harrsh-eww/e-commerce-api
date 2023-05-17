import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
    constructor(private readonly appService: CustomerService) {}

    @Get()
    async findCustomer() {
        const customer = await this.appService.getCustomer({
            email: 'dev@harrsh.com',
        });

        return {
            customer,
        };
    }

    @Post('create')
    async createCustomer(
        @Body() body: { email: string; name: string },
        @Res() res: Response,
    ) {
        const existingCustomer = await this.appService.getCustomer({
            email: body.email,
        });
        if (existingCustomer) {
            return res.status(400).json({
                message: 'Customer already exists.',
            });
        }

        await this.appService.createCustomer({
            email: body.email,
            name: body.name,
        });

        return res.json({
            message: 'Customer created successfully.',
        });
    }
}
