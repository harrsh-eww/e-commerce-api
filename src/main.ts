import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(helmet());
    app.enableCors();
    await app.listen(3000);

    const prismaService = app.get(PrismaService);
    await prismaService.enableShutdownHooks(app);
}
bootstrap();
