import { defineField, defineType } from 'sanity';

export const youtube = defineType({
  name: 'youtube',
  title: 'YouTube Video',
  type: 'object',
  fields: [
    defineField({ name: 'url', title: 'YouTube URL', type: 'url', validation: (Rule) => Rule.required() }),
    defineField({ name: 'title', title: 'Accessible Title', type: 'string' }),
  ],
});
