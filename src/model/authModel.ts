export interface UserCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: {
    id: string;
    email: string;
  } | null;
  token: string | null;
  error?: string;
}

export interface JwtPayload {
  userId: string;
  email: string;
  iat?: number;
  exp?: number;
}

export interface CurrentUserResponse {
  user: {
    id: string;
    email: string;
  } | null;
  message?: string;
  error?: string;
}