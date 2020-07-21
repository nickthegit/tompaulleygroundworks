export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'intro',
      title: 'Intro',
      type: 'textBlock',
      description: 'About intro text.',
    },
    {
      name: 'featureImages',
      title: 'Feature Image(s)',
      type: 'array',
      validation: Rule => Rule.length(2),
      description: 'Add 2 images here please. No more, no less.',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true // <-- Defaults to false
          },
          fields: [
            {
              name: 'altText',
              title: 'Alt text',
              type: 'string',
              options: {
                isHighlighted: true // <-- make this field easily accessible
              }
            }
          ]
        }
      ],
      options: {
        layout: 'grid'
      }
    },
    {
      name: 'companyInfo',
      title: 'Company Info',
      type: 'blockContentBasic',
      description: 'Company info text.',
    },
  ]
}