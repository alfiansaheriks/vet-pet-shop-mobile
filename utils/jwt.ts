import { jwtDecode } from "jwt-decode";

export const decodeJWT = (token: string) => {
  try {
    const decoded: any = jwtDecode(token);
    return decoded;
  } catch (error) {
    console.error("Failed to decode JWT: ", error);
    return null;
  }
};
