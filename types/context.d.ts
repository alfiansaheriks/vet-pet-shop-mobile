interface AuthContextType {
  authToken: string | null;
  refreshToken: string | null;
  userId: number | null;
  login: (token: string, refreshToken: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

type DecodedJWT = {
  id: number;
  email: string;
  role: string;
  exp: number;
};
