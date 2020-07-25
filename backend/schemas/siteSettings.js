export default {
  name: 'siteSettings',
  title: 'Settings',
  type: 'document',
  fields: [
    {
      title: 'Site Meta',
      name: 'siteMeta',
      type: 'object',
      fields: [
        {
          name: 'siteTitle',
          title: 'Site Title',
          type: 'string'
        },
        {
          name: 'featureImage',
          title: 'Feature Image',
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
        },
        {
          title: 'Site Description',
          name: 'siteDescription',
          type: 'textBlock',
          description: 'A description of what this site is about',
        }, {
          title: 'Keywords',
          name: 'keywords',
          type: 'array',
          description: 'keywords related to this site',
          of: [{
            type: 'string'
          }],
          options: {
            layout: 'tags'
          }
        }
      ]
    },
    {
      title: 'Contact Details',
      name: 'contactDetails',
      type: 'object',
      fields: [
        {
          name: 'tel',
          title: 'Telephone Number',
          type: 'string'
        },
        {
          name: 'email',
          title: 'Email Address',
          type: 'string'
        },
        {
          name: 'facebook',
          title: 'Facebook username',
          type: 'string'
        }
      ]
    },
  ]
}