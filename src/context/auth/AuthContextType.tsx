import { createContext } from 'react';
import { AuthRequest } from '../../models/AuthRequest';
import { AuthResponse } from '../../models/AuthResponse';

export type AuthContextType = {
    user: AuthRequest | null;
    signin: (email: string, password: string) => Promise<AuthResponse>;
    signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);