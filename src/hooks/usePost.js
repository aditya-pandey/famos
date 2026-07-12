import { useEffect, useState } from 'react';
import { fetchAdjacentPosts, fetchPostBySlug, fetchRelatedPosts } from '../services/sanity';

export function usePost(slug) {
  const [state, setState] = useState({
    post: null,
    relatedPosts: [],
    previous: null,
    next: null,
    loading: true,
    error: '',
  });

  useEffect(() => {
    let cancelled = false;

    async function loadPost() {
      setState((current) => ({ ...current, loading: true, error: '' }));

      try {
        const post = await fetchPostBySlug(slug);

        if (!post) {
          if (!cancelled) {
            setState({ post: null, relatedPosts: [], previous: null, next: null, loading: false, error: 'Article not found.' });
          }
          return;
        }

        const [relatedPosts, adjacent] = await Promise.all([
          fetchRelatedPosts(post.category?.slug, post.slug),
          fetchAdjacentPosts(post.publishedAt, post.slug),
        ]);

        if (!cancelled) {
          setState({
            post,
            relatedPosts,
            previous: adjacent?.previous || null,
            next: adjacent?.next || null,
            loading: false,
            error: '',
          });
        }
      } catch (error) {
        console.error('Failed to load blog post:', error);
        if (!cancelled) {
          setState((current) => ({
            ...current,
            loading: false,
            error: 'We could not load this article right now. Please refresh in a moment.',
          }));
        }
      }
    }

    loadPost();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  return state;
}
