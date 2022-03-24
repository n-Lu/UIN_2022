export default {
  name: 'game',
  type: 'document',
  title: 'Spill',
  fields: [
    {
      type: 'string',
      name: 'email',
      title: 'E-post',
    },
    {
      type: 'reference',
      name: 'quiz',
      title: 'quiz',
      to: { type: 'quiz' },
    },
  ],
}
