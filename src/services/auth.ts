// src/services/auth.ts
import { api } from './api';

interface LoginPayload {
  username: string;
  password: string;
}

export async function loginUser(payload: LoginPayload) {
  const response = await api.post('/auth/login', payload);
  return response.data;
}
