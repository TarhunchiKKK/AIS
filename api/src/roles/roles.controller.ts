import { Controller, Get, Query, Req, UseGuards } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { UsersService } from "src/users/users.service";
import { Operations } from "./enums/operations.enum";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { TAuthorizedRequest } from "src/auth/types/authorized-request.type";

@Controller("roles")
export class RolesController {
    constructor(
        private readonly rolesService: RolesService,
        private readonly usersService: UsersService,
    ) {}

    @Get("/check")
    @UseGuards(JwtAuthGuard)
    public async checkOperationAvailablity(
        @Req() request: TAuthorizedRequest,
        @Query("operation") operation: Operations,
    ) {
        const user = await this.usersService.findOneById(request.user.id);

        return {
            available: this.rolesService.checkOperationAvailability({
                role: user.role,
                operation,
            }),
        };
    }
}
