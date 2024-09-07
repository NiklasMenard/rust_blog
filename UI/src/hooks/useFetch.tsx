import { useState, useEffect, useCallback } from 'react';
import { statusCodeMessages } from '../constants/requests';
import { useAuth } from './useAuth';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

interface FetchOptions {
  refresh?: boolean;
}

interface ApiResponse<T> {
  body: T;
}

interface UseFetchResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
}

const useFetch = <T,>(
  url: string,
  options: FetchOptions = { refresh: true }
): UseFetchResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { token, refreshAuthToken, logout } = useAuth();

  const fetchDataWithToken = useCallback(
    async (token: string) => {
      try {
        const response = await fetch(`${API_BASE_URL}${url}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const message = statusCodeMessages[response.status] || 'An unknown error occurred.';
          throw new Error(message);
        }

        const result: ApiResponse<T> = await response.json();
        setData(result.body);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred.');
      } finally {
        setLoading(false);
      }
    },
    [url]
  );

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    if (token) {
      await fetchDataWithToken(token);
    } else {
      const newToken = await refreshAuthToken();
      if (newToken) {
        await fetchDataWithToken(newToken);
      } else {
        logout();
      }
    }
  }, [fetchDataWithToken, logout, refreshAuthToken, token]);

  useEffect(() => {
    if (options.refresh) {
      fetchData();
    }
  }, [fetchData, options.refresh]);

  return { data, loading, error, fetchData };
};

export default useFetch;