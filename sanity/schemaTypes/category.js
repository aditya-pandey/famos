import { defineField, defineType } from 'sanity';

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      options: {
        list: [
          { title: 'Teal', value: 'teal' },
          { title: 'Turquoise', value: 'turquoise' },
          { title: 'Orange', value: 'orange' },
          { title: 'Warm Neutral', value: 'warm-neutral' },
        ],
      },
      initialValue: 'teal',
    }),
  ],
});
