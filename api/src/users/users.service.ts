import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import * as argon2 from "argon2";
import { defaultUserBlockingStatus, defaultUserRole } from "./constants/default-user-data.constant";
import { UserBlockingStatus } from "./entities/user-blocking-status.entity";
import { ChangeUserStatusDto } from "./dto/change-user-status.dto";
import { UserStatus } from "./enums/user-status.enum";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly usersRepository: Repository<User>,
        @InjectRepository(UserBlockingStatus)
        private readonly userStatusesRepository: Repository<UserBlockingStatus>,
    ) {}

    public async create(createUserDto: CreateUserDto) {
        const existingUser = await this.usersRepository.findOne({
            where: {
                email: createUserDto.email,
            },
        });

        if (existingUser) {
            throw new BadRequestException("User with such email already exist.");
        }

        const userBlockingStatus =
            await this.userStatusesRepository.save(defaultUserBlockingStatus);

        return await this.usersRepository.save({
            ...createUserDto,
            password: await argon2.hash(createUserDto.password),
            role: defaultUserRole,
            blockingStatus: userBlockingStatus,
        });
    }

    public async findAll() {
        return await this.usersRepository.find({
            relations: {
                blockingStatus: true,
            },
        });
    }

    public async findOneById(id: string) {
        const user = await this.usersRepository.findOne({
            where: {
                id: id,
            },
        });

        if (!user) {
            throw new BadRequestException("User with such email not exist.");
        }

        return user;
    }

    public async findOneByEmail(email: string) {
        const user = await this.usersRepository.findOne({
            where: {
                email: email,
            },
        });

        if (!user) {
            throw new BadRequestException("User with such email not exist.");
        }

        return user;
    }

    public async changeStatus(changeUserStatusDto: ChangeUserStatusDto) {
        const userBlockingStatus = await this.userStatusesRepository.findOne({
            relations: {
                user: true,
            },
            where: {
                user: {
                    id: changeUserStatusDto.user.id,
                },
            },
        });

        if (!userBlockingStatus) {
            throw new BadRequestException("User not found.");
        }

        userBlockingStatus.status = changeUserStatusDto.status;
        if (changeUserStatusDto.status === UserStatus.ACTIVE) {
            userBlockingStatus.blokingTime = null;
            userBlockingStatus.reason = null;
        } else {
            userBlockingStatus.blokingTime = new Date();
            userBlockingStatus.reason = changeUserStatusDto.reason;
        }

        return await this.userStatusesRepository.save(userBlockingStatus);
    }
}
