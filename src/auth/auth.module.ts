import { Module } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { HttpStrategy } from 'src/auth/http.strategy';
import { ConfigModule } from 'src/config/config.module';

@Module({ imports: [ConfigModule], providers: [HttpStrategy, AuthService] })
export class AuthModule {}
