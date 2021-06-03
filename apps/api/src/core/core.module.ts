import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: process.env.DB_PASSWORD || 'root',
      database: 'pool-tracker',
      autoLoadEntities: true,
      synchronize: true
    })
  ],
  exports: [
    TypeOrmModule
  ]
})
export class CoreModule {
}
