import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Market Research Project Tracker')
    .setDescription('Market Research Project Tracker API description')
    .setVersion('1.0')
    .addTag('documentation')
    .build();
    const document=SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('documentation',app,document)
    app.enableCors();
    const configService:ConfigService=app.get(ConfigService);
   
    await app.listen(configService.get("PORT","0.0.0.0"));
    console.log("Listening on port: " +configService.get("PORT"));
 
 
}
bootstrap();
