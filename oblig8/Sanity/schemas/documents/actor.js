export default {
  title: 'Actor',
  name: 'actor',
  type: 'document',
  fields: [
    {
      title: 'Full name',
      name: 'fullname',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'Skriv navnet til skuespiller',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'fullname',
        maxLength: 96,
      },
    },
  ],
}
