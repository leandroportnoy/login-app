import { AuthRequest } from "../models/AuthRequest";
import { AuthResponse } from "../models/AuthResponse";
import { apiClient } from "./axios";

export const doAuth = async (
    authRequest: AuthRequest
): Promise<AuthResponse> => {
    const response =
        await apiClient.post<AuthResponse>(
            "/auth/login",
            {
                username: authRequest.username,
                password: authRequest.password,
            }
        );
    const result = response.data;

    return result;
};