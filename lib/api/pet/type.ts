export interface Pet {
    id: string;
    name: string;
    type: string;
    breed: string;
    gender: string;
    age: number;
    birth_date: string;
    color: string;
    weight: number;
}

export interface PetPayload {
    name: string;
    type: string;
    breed: string;
    gender: string;
    birth_date: string;
    color: string;
    weight: number;
}

export interface PetResponse {
    data: Pet[];
    status: string;
}