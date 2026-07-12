import { PortableText } from '@portabletext/react';
import { getImageDimensions } from '@sanity/asset-utils';
import { urlForImage } from '../../services/sanity';
import { slugify } from '../../utils/blog';

function SanityImage({ value }) {
  const image = urlForImage(value)?.width(1200).auto('format').fit('max').url();
  const dimensions = value?.asset ? getImageDimensions(value) : null;

  if (!image) return null;

  return (
    <figure className="my-8 sm:my-10">
      <img
        className="max-h-[520px] w-full rounded-[1.25rem] border border-teal-700/10 bg-mist object-contain shadow-soft"
        src={image}
        alt={value.alt || ''}
        loading="lazy"
        width={dimensions?.width || 1200}
        height={dimensions?.height || 800}
      />
      {value.caption ? <figcaption className="mt-3 text-center text-sm text-muted">{value.caption}</figcaption> : null}
    </figure>
  );
}

function YouTubeEmbed({ value }) {
  if (!value?.url) return null;
  const id = value.url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/)?.[1];
  if (!id) return null;

  return (
    <div className="my-10 aspect-video overflow-hidden rounded-[1.5rem] border border-teal-700/10 shadow-soft">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${id}`}
        title={value.title || 'Embedded YouTube video'}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

const components = {
  types: {
    image: SanityImage,
    callout: ({ value }) => (
      <div className="my-8 rounded-[1.25rem] border border-orange-300/50 bg-orange-100/55 p-5 text-teal-950 sm:p-6">
        <p className="font-bold">{value.title}</p>
        {value.text ? <p className="mt-2 leading-7">{value.text}</p> : null}
      </div>
    ),
    youtube: YouTubeEmbed,
    table: ({ value }) => (
      <div className="my-8 overflow-x-auto rounded-[1.25rem] border border-teal-700/10">
        <table className="w-full min-w-[520px] border-collapse bg-white text-left text-sm">
          <tbody>
            {value.rows?.map((row) => (
              <tr key={row._key} className="border-b border-teal-700/10 last:border-0">
                {row.cells?.map((cell) => (
                  <td key={cell} className="px-4 py-3 text-muted">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  block: {
    h1: ({ children }) => <h2 id={slugify(children?.join(''))} className="mt-12 font-display text-3xl font-bold leading-tight text-teal-900 sm:text-4xl">{children}</h2>,
    h2: ({ children }) => <h2 id={slugify(children?.join(''))} className="mt-12 font-display text-2xl font-bold leading-tight text-teal-900 sm:text-3xl">{children}</h2>,
    h3: ({ children }) => <h3 id={slugify(children?.join(''))} className="mt-9 font-display text-xl font-bold leading-tight text-teal-900 sm:text-2xl">{children}</h3>,
    normal: ({ children }) => <p className="mt-5 text-lg leading-8 text-muted">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="my-8 rounded-r-[1.25rem] border-l-4 border-orange-300 bg-teal-50/70 py-5 pl-5 pr-4 font-display text-xl font-semibold leading-snug text-teal-900 sm:text-2xl">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mt-5 list-disc space-y-2 pl-6 text-lg leading-8 text-muted">{children}</ul>,
    number: ({ children }) => <ol className="mt-5 list-decimal space-y-2 pl-6 text-lg leading-8 text-muted">{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => (
      <a className="font-semibold text-teal-700 underline decoration-teal-300 underline-offset-4" href={value.href} target={value.blank ? '_blank' : undefined} rel={value.blank ? 'noreferrer' : undefined}>
        {children}
      </a>
    ),
    code: ({ children }) => <code className="rounded-lg bg-teal-50 px-1.5 py-0.5 text-sm font-semibold text-teal-900">{children}</code>,
  },
};

export default function PortableContent({ value }) {
  return <PortableText value={value || []} components={components} />;
}
