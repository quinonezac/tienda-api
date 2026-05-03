import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS — permite que Angular (localhost:4200) llame a la API
  app.enableCors({
    origin: ['http://localhost:4200', 'https://tu-app.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  });

  // Validación global de DTOs
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  app.setGlobalPrefix('api');

  await app.listen(3000);
  console.log('API corriendo en http://localhost:3000/api');
}
bootstrap();