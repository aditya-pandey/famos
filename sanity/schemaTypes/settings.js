import { defineField, defineType } from 'sanity';

export const settings = defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({ name: 'blogTitle', title: 'Blog Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'blogDescription', title: 'Blog Description', type: 'text', rows: 3 }),
    defineField({ name: 'ctaText', title: 'CTA Text', type: 'string' }),
    defineField({ name: 'ctaLink', title: 'CTA Link', type: 'url' }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'url', title: 'URL', type: 'url' }),
          ],
        },
      ],
    }),
  ],
});
