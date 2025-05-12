import api from "..";
import { User, UserRequest, UserResponse, UserUpdateRequest } from "./type";

export const getDataUser = async ({userId, accessToken}: UserRequest): Promise<UserResponse> => {
    const res = await api.get<UserResponse>(`api/users/${userId}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return res.data;
}

export const updateProfileUser = async ({
    userId,
    accessToken,
    data: UserUpdatePayload,
}: UserUpdateRequest): Promise<UserResponse> => {
    const res = await api.put(`/api/users/${userId}`, UserUpdatePayload, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return res.data.data;
}