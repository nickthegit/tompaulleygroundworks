export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'strapline',
      title: 'Strapline',
      type: 'string',
      validation: Rule => Rule.required().max(80)
    },
    {
      name: 'intro',
      title: 'Intro',
      type: 'textBlock',
    },
    {
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string',
      description: 'Text that is applied to the Call to Action Button',
      validation: Rule => Rule.max(40)
    },
    {
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'string',
      description: 'Where Call to Action Button links to.',
      options: {
        list: [
          { title: 'Home', value: 'home' },
          { title: 'About', value: 'about' },
          { title: 'Services', value: 'services' },
          { title: 'Contact', value: 'contact' }
        ]
      }
    },
    {
      name: 'featureImages',
      title: 'Feature Image(s)',
      type: 'array',
      description: 'Images for the background slider',
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
  ]
}