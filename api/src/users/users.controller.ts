import { Controller, Get, Post, Body, Patch, Param, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ProvidesOperation } from "src/roles/decorators/provides-operation.decorator";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { Operations } from "src/roles/enums/operations.enum";
import { RolesGuard } from "src/roles/guards/roles.guard";

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

    @Patch(":id")
    @ProvidesOperation(Operations.UPDATE_USER)
    @UseGuards(JwtAuthGuard, RolesGuard)
    public async update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
        return await this.usersService.update(id, updateUserDto);
    }
}
