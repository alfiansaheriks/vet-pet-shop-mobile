import api from "..";
import { PetPayload, PetResponse } from "./type";

export const getPets = async (userId: string, token: string): Promise<PetResponse> => {
    const res = await api.get(`/pets/customer/${userId}` , {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    return res.data;
}

export const createPet = async (token:string, data: PetPayload): Promise<PetResponse> => {
    const res = await api.post("/pets", data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    return res.data;
}

export const getPet = async (petId: string, token:string): Promise<PetResponse> => {
    const res = await api.get(`/pets/${petId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    return res.data;
}

export const updatePet = async (petId: string, token:string, data: PetPayload): Promise<PetResponse> => {
    const res = await api.put(`/pets/${petId}`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    return res.data;
}

export const deletePet = async (petId: string, token:string): Promise<PetResponse> => {
    const res = await api.delete(`/pets/${petId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    return res.data;
}
