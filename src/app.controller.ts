import { Body, Controller, Get, Param, Query, Ip } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('all/:id')
    findAll(
        @Query() query: object,
        @Param() params: object,
        @Body() body: object,
        @Ip() ip: string,
    ): string {
        console.log({
            query,
            params,
            body,
            ip,
        });

        return 'This action returns all cats';
    }
}
