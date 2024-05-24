import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  )

  const config = new DocumentBuilder()
    .setTitle('EduPrime Core')
    .setDescription('Api logical core for EduPrime project')
    .setVersion('0.1')
    .addTag('EduPrime')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('', app, document)

  await app.listen(3000, '0.0.0.0')
}
bootstrap()
