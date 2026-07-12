import { defineArrayMember, defineField, defineType } from 'sanity';

export const table = defineType({
  name: 'table',
  title: 'Table',
  type: 'object',
  fields: [
    defineField({
      name: 'rows',
      title: 'Rows',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'cells',
              title: 'Cells',
              type: 'array',
              of: [defineArrayMember({ type: 'string' })],
            }),
          ],
          preview: {
            select: { cells: 'cells' },
            prepare({ cells }) {
              return { title: cells?.join(' | ') || 'Table row' };
            },
          },
        }),
      ],
    }),
  ],
});
