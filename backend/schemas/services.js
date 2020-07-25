export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
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
      name: 'intro',
      title: 'Intro',
      type: 'blockContentBasic',
      description: 'An introduction into the service.',
    },
    {
      name: 'imageBlocks',
      title: 'Image Blocks',
      type: 'array',
      of: [
        {
          title: 'Image Block',
          name: 'imageBlock',
          type: 'object',
          fields: [
            {
              name: 'blocktype',
              title: 'Block Type',
              type: 'string',
              validation: Rule => Rule.required(),
              options: {
                list: [
                  { title: 'Slider', value: 'slider' },
                  { title: 'Grid', value: 'grid' }
                ]
              }
            },
            {
              name: 'featureImages',
              title: 'Feature Image(s)',
              type: 'array',
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
          ]
        }
      ]
    }
  ]
}