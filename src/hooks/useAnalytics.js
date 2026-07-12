import { useEffect } from 'react';
import ReactGA from 'react-ga4';

export function usePageView(path, title) {
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: path, title });
  }, [path, title]);
}

export function useScrollDepthTracking(label) {
  useEffect(() => {
    const milestones = new Set();

    function trackDepth() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const depth = Math.round((window.scrollY / scrollable) * 100);
      [25, 50, 75, 90].forEach((milestone) => {
        if (depth >= milestone && !milestones.has(milestone)) {
          milestones.add(milestone);
          ReactGA.event('scroll_depth', {
            category: 'Blog',
            label,
            value: milestone,
          });
        }
      });
    }

    window.addEventListener('scroll', trackDepth, { passive: true });
    trackDepth();
    return () => window.removeEventListener('scroll', trackDepth);
  }, [label]);
}

export function trackBlogEvent(action, label) {
  ReactGA.event(action, {
    category: 'Blog',
    label,
  });
}
