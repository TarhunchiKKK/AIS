import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import * as argon2 from "argon2";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}

    public async create(createUserDto: CreateUserDto) {
        const existingUser = await this.usersRepository.findOne({
            where: {
                email: createUserDto.email,
            },
        });

        if (existingUser) {
            throw new BadRequestException("User with such email already exist.");
        }

        return await this.usersRepository.save({
            ...createUserDto,
            password: await argon2.hash(createUserDto.password),
        });
    }

    public async findAll() {
        return await this.usersRepository.find();
    }

    public async findOneByEmail(email: string) {
        const existingUser = await this.usersRepository.findOne({
            where: {
                email: email,
            },
        });

        if (!existingUser) {
            throw new BadRequestException("User with such email not exist.");
        }

        return existingUser;
    }
}
