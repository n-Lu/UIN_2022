export default {
  type: 'document',
  name: 'movie',
  title: 'Movie',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'reference',
      name: 'actor',
      title: 'Actor',
      to: [{ type: 'actor' }],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'unik id',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
  ],
}
