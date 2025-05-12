import api from '@/lib/api/index';
import { LoginRequest, LoginResponse, LogoutRequest, LogoutResponse, RegisterRequest } from './types';


export const login = async (data: LoginRequest): Promise<LoginResponse> => {
    const res = await api.post('/login', data);
    return res.data;
}

export const register = async (data:RegisterRequest): Promise<RegisterRequest> => {
    const res = await api.post('/register', data);
    return res.data;
}

export const logout = async({refresh_token}: LogoutRequest): Promise<LogoutResponse> => {
    const res = await api.post('/logout', {refresh_token});
    return res.data;
}

export const refreshAccessToken = async (refresh_token: string): Promise<LoginResponse> => {
    const res = await api.post('/refresh-token', { refresh_token: refresh_token });
    console.log("payload refresh toke : ", refresh_token);
    return res.data;
}