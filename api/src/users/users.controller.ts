import { Controller, Get, Post, Body, Patch } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { ChangeUserStatusDto } from "./dto/change-user-status.dto";

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    public async create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Get()
    public async findAll() {
        return this.usersService.findAll();
    }

    @Patch("/status")
    public async changeUserStatus(@Body() changeUserStatusDto: ChangeUserStatusDto) {
        return await this.usersService.changeStatus(changeUserStatusDto);
    }
}
