import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ProvidesOperation } from "../decorators/provides-operation.decorator";
import { RolesService } from "../roles.service";
import { TAuthorizedRequest } from "src/auth/types/authorized-request.type";
import { Operations } from "../enums/operations.enum";
import { UsersService } from "src/users/users.service";
import { TUserProfile } from "src/auth/types/user-profile.type";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private readonly reflector: Reflector,
        private readonly rolesService: RolesService,
        private readonly usersService: UsersService,
    ) {}

    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const { operation, userProfile } = this.getMetadata(context);

        if (!operation) {
            return true;
        }

        const user = await this.usersService.findOneById(userProfile.id);

        return this.rolesService.checkOperationAvailability({
            role: user.role,
            operation: operation,
        });
    }

    public getMetadata(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest() as TAuthorizedRequest;

        const userProfile = request.user as TUserProfile;

        const operation = this.reflector.get(ProvidesOperation, context.getHandler()) as Operations;

        return {
            userProfile,
            operation,
        };
    }
}
