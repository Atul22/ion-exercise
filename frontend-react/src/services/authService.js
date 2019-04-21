import http from "./httpService";
import jwtDecode from "jwt-decode";
import { apiEndPoint } from "../config.json";

const tokenKey = "token";

export async function login(username, password) {
  const { data } = await http.post(apiEndPoint, { username, password });
  localStorage.setItem(tokenKey, data.jwt); //use local storage to store jwt
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export default {
  login,
  logout,
  getCurrentUser
};
