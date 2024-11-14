import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { UserBlockingStatus } from "./entities/user-blocking-status.entity";

@Module({
    imports: [TypeOrmModule.forFeature([User, UserBlockingStatus])],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule {}
