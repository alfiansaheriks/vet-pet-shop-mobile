export interface UserRequest {
  userId: number | null;
  accessToken?: string | null;
}

export interface Contact {
  ID: number;
  user_id: number;
  handphone: string;
  wa_handphone: string;
}

export interface User {
  ID: number;
  name: string;
  email: string;
  role: string;
  created_at: string;
  updated_at: string;
  contact: Contact[];
}

export interface UserUpdateRequest {
  userId: number | null;
  accessToken: string | null;
  data: UserUpdatePayload;
}

export interface UserUpdatePayload {
  name: string;
  email: string;
  role: string;
}

export interface UserResponse {
  data: User;
  status: string;
}
