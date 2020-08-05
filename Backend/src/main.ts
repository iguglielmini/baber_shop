import * as dotenv from 'dotenv';
import { NestFactory, Reflector } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PostgresException } from './errors/postgres.exception';
import { ValidationPipe, ClassSerializerInterceptor } from '@nestjs/common';

if (process.env.NODE_ENV !== 'production') dotenv.config();

const port = process.env.PORT || 8000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const options = new DocumentBuilder()
    .setTitle('Barber Shop')
    .setDescription('Barber Shop API')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      },
      'JWT',
    )
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  app.useGlobalFilters(new PostgresException());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalPipes(
    new ValidationPipe({ transform: true, validationError: { value: true } }),
  );
  await app.listen(port);
}
bootstrap();
