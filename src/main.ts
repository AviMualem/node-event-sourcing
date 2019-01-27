import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'     ;

async function bootstrap() {

  // Loading environment variables from a .env file in project root.
  require('dotenv').config();
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Sample Nest WebApi')
    .setDescription('Sample Nest impl')
    .setVersion('1.0')
    .addTag('users')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('Users/api', app, document);

  await app.listen(3000);
}

bootstrap();
