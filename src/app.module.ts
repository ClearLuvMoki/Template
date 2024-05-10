import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/user.entity';
import { getConfig } from '../config';

const MODULES = [UserModule];

const ENTITIES = [UserEntity];

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      load: [getConfig],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'mysql',
          entities: ENTITIES,
          keepConnectionAlive: true,
          ...config.get('db.mysql'),
        } as TypeOrmModuleOptions;
      },
    }),
    ...MODULES,
  ].filter(Boolean),
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
