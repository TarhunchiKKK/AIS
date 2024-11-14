import { usersApi } from "@/entities/users";
import { routes } from "@/shared/constants";
import { useNavigate, useParams } from "react-router-dom";

export function useEditUser() {
    const navigate = useNavigate();

    const { userId } = useParams();

    const { data: user } = usersApi.useFindOneQuery(userId!);

    const onSubmit = () => {
        navigate(routes.createUserRoute(userId!));
    };

    return { user, onSubmit };
}
