import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import * as argon2 from "argon2";
import {
    defaultUserBlockingStatus,
    defaultUserPost,
    defaultUserRole,
} from "./constants/default-user-data.constant";
import { UserBlockingStatus } from "./entities/user-blocking-status.entity";
import { UserStatus } from "./enums/user-status.enum";
import { UserPost } from "./entities/user-post.entity";
import { UpdateUserDto } from "./dto/update-user.dto";
import { setupUsersData } from "./constants/setup.constants";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,

        @InjectRepository(UserBlockingStatus)
        private readonly userStatusesRepository: Repository<UserBlockingStatus>,

        @InjectRepository(UserPost)
        private readonly userPostsRepository: Repository<UserPost>,
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

        const [userBlockingStatus, userPost] = await Promise.all([
            this.userStatusesRepository.save(defaultUserBlockingStatus),
            this.userPostsRepository.save(defaultUserPost),
        ]);

        return await this.usersRepository.save({
            ...createUserDto,
            password: await argon2.hash(createUserDto.password),
            role: defaultUserRole,
            blockingStatus: userBlockingStatus,
            post: userPost,
        });
    }

    public async findAll() {
        return await this.usersRepository.find({
            relations: {
                blockingStatus: true,
                post: true,
            },
        });
    }

    public async findOneById(id: string) {
        const user = await this.usersRepository.findOne({
            where: {
                id: id,
            },
            relations: {
                blockingStatus: true,
                post: true,
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

    public async update(id: string, updateUserDto: UpdateUserDto) {
        const user = await this.usersRepository.findOne({
            where: {
                id: id,
            },
            relations: {
                post: true,
                blockingStatus: true,
            },
        });

        if (!user) {
            throw new BadRequestException("User not found.");
        }

        await Promise.all([
            this.userStatusesRepository.update(user.blockingStatus.id, {
                ...user.blockingStatus,
                ...updateUserDto.blockingStatus,
                blockingTime:
                    updateUserDto.blockingStatus.status === UserStatus.BLOCKED ? new Date() : null,
            }),
            this.userPostsRepository.update(user.post.id, {
                ...user.post,
                ...updateUserDto.post,
            }),
            this.usersRepository.update(id, {
                firstName: updateUserDto.firstName,
                lastName: updateUserDto.lastName,
            }),
        ]);
    }

    public async setupData() {
        const count = await this.usersRepository.count();

        if (count === 0) {
            setupUsersData.forEach((data) => {
                Promise.all([
                    this.userStatusesRepository.save(data.blockingStatus),
                    this.userPostsRepository.save(data.post),
                    argon2.hash(data.user.password),
                ]).then(([blockingStatus, post, password]) =>
                    this.usersRepository.save({
                        ...data.user,
                        password,
                        blockingStatus,
                        post,
                    }),
                );
            });
        }
    }
}
