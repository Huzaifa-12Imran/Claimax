import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '',
  headers: { 'Content-Type': 'application/json' },
  timeout: 15000,
});

// Response interceptor — normalise error shape
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const data   = error.response?.data;

    if (status === 422) {
      const err = new Error('Validation failed');
      err.fieldErrors = data?.errors || {};
      return Promise.reject(err);
    }

    if (status === 429) {
      const err = new Error(data?.error || 'Too many requests. Please try again later.');
      err.isTooManyRequests = true;
      return Promise.reject(err);
    }

    const message = data?.error || data?.message || error.message || 'An unexpected error occurred.';
    return Promise.reject(new Error(message));
  }
);

export async function submitContactForm(formData) {
  const { data } = await api.post('/api/contact', formData);
  return data;
}

export default api;
