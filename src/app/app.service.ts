import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    pingServer(): {
        message: string;
    } {
        return {
            message: 'Server is up and running!',
        };
    }
}
