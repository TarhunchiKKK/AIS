import { usersApi } from "@/entities/users";
import { useParams } from "react-router-dom";

export function useUser() {
    const { userId } = useParams();

    const { data: user } = usersApi.useFindOneQuery(userId!);

    return { user };
}
