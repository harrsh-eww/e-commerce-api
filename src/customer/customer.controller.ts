import { Controller, Get } from '@nestjs/common';
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
}
