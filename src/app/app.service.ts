import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    pingServer(): string {
        return 'Server is up and running!';
    }
}
