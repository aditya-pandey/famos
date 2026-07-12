import { Check, Linkedin, Share2 } from 'lucide-react';
import { useState } from 'react';

export default function ShareButtons({ title, url }) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);

  async function shareArticle() {
    if (navigator.share) {
      await navigator.share({
        title,
        url,
      });
      return;
    }

    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <a
        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-teal-700/15 bg-white px-4 text-sm font-bold text-teal-900 transition hover:bg-teal-50"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Share on LinkedIn"
      >
        <Linkedin aria-hidden="true" size={17} />
        LinkedIn
      </a>
      <button
        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-teal-700/15 bg-white px-4 text-sm font-bold text-teal-900 transition hover:bg-teal-50"
        type="button"
        onClick={shareArticle}
      >
        {copied ? <Check aria-hidden="true" size={17} /> : <Share2 aria-hidden="true" size={17} />}
        {copied ? 'Link copied' : 'Share'}
      </button>
    </div>
  );
}
