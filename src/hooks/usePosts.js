import { useEffect, useState } from 'react';
import { fetchBlogSettings, fetchCategories, fetchPosts } from '../services/sanity';

export function usePosts() {
  const [state, setState] = useState({
    posts: [],
    categories: [],
    settings: null,
    loading: true,
    error: '',
  });

  useEffect(() => {
    let cancelled = false;

    async function loadPosts() {
      try {
        const [posts, categories, settings] = await Promise.all([
          fetchPosts(),
          fetchCategories(),
          fetchBlogSettings(),
        ]);

        if (!cancelled) {
          setState({ posts, categories, settings, loading: false, error: '' });
        }
      } catch (error) {
        console.error('Failed to load blog posts:', error);
        if (!cancelled) {
          setState((current) => ({
            ...current,
            loading: false,
            error: 'We could not load the blog right now. Please refresh in a moment.',
          }));
        }
      }
    }

    loadPosts();
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
