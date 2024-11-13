import { BadRequestException, Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { SignUpDto } from "./dto/sign-up.dto";
import { GenerateJWTTokenDto } from "./dto/generate-jwt-token.dto";
import { JwtService } from "@nestjs/jwt";
import { SignInDto } from "./dto/sign-in.dto";
import * as argon2 from "argon2";

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    private async validateUser(signInDto: SignInDto) {
        const user = await this.usersService.findOneByEmail(signInDto.email);

        if (!user) {
            throw new BadRequestException("User not found.");
        }

        const passwordsMath = await argon2.verify(user.password, signInDto.password);

        if (!passwordsMath) {
            throw new BadRequestException("Incorrect password.");
        }

        return user;
    }

    private generateJWTToken(dto: GenerateJWTTokenDto) {
        return this.jwtService.sign({
            id: dto.id,
            firstName: dto.firstName,
            lastName: dto.lastName,
            email: dto.email,
            password: dto.password,
        });
    }

    public async signUp(signUpDto: SignUpDto) {
        const user = await this.usersService.create(signUpDto);

        const jwtToken = this.generateJWTToken(user);

        return {
            user: user,
            access: jwtToken,
        };
    }

    public async signIn(signDto: SignInDto) {
        const user = await this.validateUser(signDto);

        const jwtToken = this.generateJWTToken(user);

        const { password: _, ...userWithoutPassword } = user;

        return {
            user: userWithoutPassword,
            access: jwtToken,
        };
    }
}
