import { useState, useEffect } from 'react';
import { api, Tour } from '@/services/api';

export const useTours = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        setLoading(true);
        const data = await api.getTours();
        setTours(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch tours');
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  return { tours, loading, error };
};
