import { Injectable } from "@nestjs/common";
import { CheckOperationAvailabilityDto } from "./dto/check-operation-availability.dto";
import { userPermissions } from "./constants/user-permissions.constant";

@Injectable()
export class RolesService {
    public checkOperationAvailability(dto: CheckOperationAvailabilityDto) {
        return userPermissions[dto.role].includes(dto.operation);
    }
}
