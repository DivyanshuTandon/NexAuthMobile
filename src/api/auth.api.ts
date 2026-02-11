import { apiClient } from './client';

export const loginApi = async (email: string, password: string) => {
    console.log("LOGIN PAYLOAD:", email, password);
    
  const response = await apiClient.post('/auth/login', {
    email,
    password,
  });

  return response.data;
};
