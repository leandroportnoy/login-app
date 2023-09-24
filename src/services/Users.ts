import { AuthResponse } from "../models/AuthResponse";
import { UserResponse } from "../models/UserResponse";
import { apiClient } from "./axios";

export const doAuth = async (
    query: string
): Promise<UserResponse> => {
    const response = await apiClient.get<UserResponse>(`/users/${query}`);
    const result = response.data;
    return result;
};