import { BadRequestException, CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { TRequest } from "src/shared/types/request.type";
import { TUserProfile } from "../types/user-profile.type";

// this guard checks JST token in request headers and define user from this token
@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest() as TRequest;

        try {
            const authHeaders: string = request.headers.authorization;
            const [bearer, token, _] = authHeaders.split(" ");

            if (bearer !== "Bearer" || !token) {
                throw new BadRequestException("No auth token found.");
            }

            const { password, ...userProfile } = this.jwtService.verify(token) as TUserProfile;

            request.user = userProfile;
            return true;
        } catch (exception: unknown) {
            throw exception;
        }
    }
}
