export function setMetaTag(selector, attribute, value) {
  if (!value) return;
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement('meta');
    const match = selector.match(/\[(name|property)="([^"]+)"\]/);
    if (match) tag.setAttribute(match[1], match[2]);
    document.head.appendChild(tag);
  }

  tag.setAttribute(attribute, value);
}

export function setLinkTag(rel, href) {
  if (!href) return;
  let tag = document.head.querySelector(`link[rel="${rel}"]`);

  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }

  tag.setAttribute('href', href);
}

export function applySeo({ title, description, image, url, type = 'website', jsonLd }) {
  if (title) document.title = title;
  setMetaTag('meta[name="description"]', 'content', description);
  setMetaTag('meta[property="og:title"]', 'content', title);
  setMetaTag('meta[property="og:description"]', 'content', description);
  setMetaTag('meta[property="og:image"]', 'content', image);
  setMetaTag('meta[property="og:url"]', 'content', url);
  setMetaTag('meta[property="og:type"]', 'content', type);
  setMetaTag('meta[name="twitter:card"]', 'content', image ? 'summary_large_image' : 'summary');
  setMetaTag('meta[name="twitter:title"]', 'content', title);
  setMetaTag('meta[name="twitter:description"]', 'content', description);
  setMetaTag('meta[name="twitter:image"]', 'content', image);
  setLinkTag('canonical', url);

  document.querySelectorAll('script[data-json-ld="blog"]').forEach((node) => node.remove());
  if (jsonLd) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.jsonLd = 'blog';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }
}
