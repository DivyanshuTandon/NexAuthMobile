import { apiClient } from './client';

export const loginApi = async (email: string, password: string) => {
  const response = await apiClient.post('/auth/login', {
    email,
    password,
  });

  return response.data;
};
