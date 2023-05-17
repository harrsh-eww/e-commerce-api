import {
    Controller,
    Get,
    Post,
    UploadedFiles,
    UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    pingServer(): {
        message: string;
    } {
        return this.appService.pingServer();
    }

    @Post('upload')
    @UseInterceptors(FilesInterceptor('files'))
    uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
        console.log(files);
    }
}
