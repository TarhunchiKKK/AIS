import { Controller, Get, Post, Body, Patch, UseGuards, Param } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { ChangeUserStatusDto } from "./dto/change-user-status.dto";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { RolesGuard } from "src/roles/guards/roles.guard";
import { ProvidesOperation } from "src/roles/decorators/provides-operation.decorator";
import { Operations } from "src/roles/enums/operations.enum";

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    public async create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Get()
    @ProvidesOperation(Operations.SEE_USERS)
    @UseGuards(JwtAuthGuard, RolesGuard)
    public async findAll() {
        return this.usersService.findAll();
    }

    @Get(":id")
    public async findOneBuId(@Param("id") id: string) {
        return await this.usersService.findOneById(id);
    }

    @Patch("/status")
    @ProvidesOperation(Operations.CHANGE_USER_STATUS)
    @UseGuards(JwtAuthGuard, RolesGuard)
    public async changeUserStatus(@Body() changeUserStatusDto: ChangeUserStatusDto) {
        return await this.usersService.changeStatus(changeUserStatusDto);
    }
}
