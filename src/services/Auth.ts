import { AuthRequest } from "../models/AuthRequest";
import { UserData } from "../models/UserData";
import { apiClient } from "./axios";

export const fetchLogin = async (
    authRequest: AuthRequest
): Promise<UserData> => {
    try {
        const response = await apiClient.post<UserData>("/auth/login", {
            username: authRequest.username,
            password: authRequest.password,
        });

        const result = response.data;
        return result;
    } catch (error) {
        console.error("An error occurred during authentication:", error);
        // You can choose to rethrow the error here if needed.
        throw error;
    }
};