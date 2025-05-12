export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

export interface RegisterRequest {
  Name: string;
  Email: string;
  Password: string;
  Role: string;
  Phone_Number: string;
  Wa_Phone_Number: string;
}

export interface RegisterResponse {
  message: string;
}

export interface LogoutRequest {
    refresh_token: string;
}

export interface LogoutResponse {
    message: string;
}