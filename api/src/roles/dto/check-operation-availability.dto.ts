import { Operations } from "../enums/operations.enum";
import { UserRoles } from "../enums/user-roles.enum";

export class CheckOperationAvailabilityDto {
    role: UserRoles;

    operation: Operations;
}
