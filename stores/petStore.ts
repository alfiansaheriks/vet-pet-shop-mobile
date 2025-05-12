import { getPets, createPet, getPet, updatePet, deletePet } from "@/lib/api/pet";
import { Pet, PetPayload, PetResponse } from "@/lib/api/pet/type";
import { create } from "zustand";

type PetStore = {
    pet: Pet[];
    fetchPets: (userId:string, token: string) => Promise<void>;
    setPet: (pet: Pet[]) => void;
    addPet: (userId: string, token:string, data:PetPayload) => Promise<void>;
    fetchPet: (petId: string, token:string) => Promise<void>;
    updatePet: (petId: string, token:string, data:PetPayload) => Promise<void>;
    deletePet: (petId: string, token:string) => Promise<void>;
}

export const usePetStore = create<PetStore>((set) => ({
    pet: [],
    fetchPets: async (userId:string, token: string) => {
        try {
            const res = await getPets(userId, token);
            set({ pet: res.data });
        } catch (err:any) {
            console.error("Failed to fetch pet:", err);
        }
    },

    addPet: async (userId:string, token:string, data:PetPayload) => {
        try {
            const newPet = await createPet(token, data);

            console.log("new pet: ", newPet);
        } catch (err:any) {
            console.error("Failed to add pet:", err);
        }
    },

    fetchPet: async (petId:string, token:string) => {
        try {
            const res = await getPet(petId, token);
            set({ pet: res.data });
        } catch (err:any) {
            console.error("Failed to fetch pet:", err);
            throw err;
        }
    },

    updatePet: async (petId:string, token:string, data:PetPayload) => {
        try {
            const res = await updatePet(petId, token, data);
            set({ pet: res.data });
        } catch (err:any) {
            console.error("Failed to fetch pet:", err);
            throw err;
        }
    },

    deletePet: async (petId:string, token:string) => {
        try {
            const res = await deletePet(petId, token);
            set({ pet: res.data });
        }
        catch (err:any) {
            console.error("Failed to fetch pet:", err);
            throw err;
        }
    },

    setPet: (pet) => set({ pet }),
}));