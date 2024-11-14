import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { RolesModule } from "./roles/roles.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ".env",
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: "postgres",
                database: configService.get("DB_NAME"),
                host: configService.get("DB_HOST"),
                port: +configService.get("DB_PORT"),
                username: configService.get("DB_USER"),
                password: configService.get("DB_PASSWORD"),
                autoLoadEntities: true,
                synchronize: true,
            }),
        }),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                global: true,
                secret: configService.get("JWT_SECRET"),
                signOptions: {
                    expiresIn: configService.get("JWT_EXPIRATION"),
                },
            }),
        }),
        UsersModule,
        AuthModule,
        RolesModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
