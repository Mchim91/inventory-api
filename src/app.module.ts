import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './domain/transactions/transactions.module';
import { SuppliersModule } from './domain/suppliers/suppliers.module';
import { CategoriesModule } from './domain/categories/categories.module';
import { ItemsModule } from './domain/items/items.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './domain/users/users.module';
import { LocationsModule } from './domain/locations/locations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { OrdersModule } from './domain/orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    AuthModule, 
    ItemsModule, 
    CategoriesModule, 
    SuppliersModule, 
    TransactionsModule, 
    UsersModule, 
    LocationsModule, OrdersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
