import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { SignUpDto } from "./dto/sign-up.dto";
import { GenerateJWTTokenDto } from "./dto/generate-jwt-token.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

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
            data: user,
            access: jwtToken,
        };
    }
}
