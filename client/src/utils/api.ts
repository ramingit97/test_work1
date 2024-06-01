import axios from 'axios';

export const api = {
  get: <T>(url: string, params?: object) =>
    axios.get<T>(url, {
      headers: {
        
      },
      ...params,
    }),
  post: <T>(url: string, data: any) =>
    axios.post<T>(url, data, {
      headers: {
      },
    }),
  patch: <T>(url: string, data: any) =>
    axios.patch<T>(url, data, {
      headers: {
      },
    }),
  delete: <T>(url: string) =>
    axios.delete<T>(url, {
      headers: {
      },
    }),
};