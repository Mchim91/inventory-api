import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { THROTTLER_MODULE_OPTIONS } from './util/auth.constants';
import { APP_GUARD } from '@nestjs/core';
import { HashingService } from './hashing/hashing.service';
import { BcryptService } from './hashing/bcrypt.service';

@Module({
  imports: [
    ThrottlerModule.forRoot(THROTTLER_MODULE_OPTIONS)
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: HashingService,
      useClass: BcryptService,
    },
    BcryptService
  ],
})
export class AuthModule {}
