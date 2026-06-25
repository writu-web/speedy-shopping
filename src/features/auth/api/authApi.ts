import apiClient from "../../../lib/api/axios";
import type { loginCredentials, registerCredentials } from "../types/auth.type";
async function login({ username, password }: loginCredentials) {
  try {
    const response = await apiClient.post("/auth/login", {
      username,
      password,
    });
    const { token } = response.data;
    localStorage.setItem("token", token);
    return token;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
}
async function register({ username, email, password }: registerCredentials) {
  try {
    const response = await apiClient.post("/auth/register", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Registration Error:", error);
    throw error;
  }
}

export { login, register };
