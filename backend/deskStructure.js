import S from '@sanity/desk-tool/structure-builder'

import MdHome from 'react-icons/lib/md/home'
import MdFilterNone from 'react-icons/lib/md/filter-none'
import MdInfo from 'react-icons/lib/md/info'
import MdPhone from 'react-icons/lib/md/phone'
import MdSettings from 'react-icons/lib/md/settings'
import MdToys from 'react-icons/lib/md/toys'


export default () =>
  S.list()
    .title('Content')
    .items([
      // Make a new list item
      S.listItem()
        // Give it a title
        .title('Pages')
        .icon(MdFilterNone)
        .child(
          // Make a list in the second pane called Portfolio
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home')
                .icon(MdHome)
                .child(
                  S.editor()
                    .schemaType('home')
                    .documentId('home')
                ),
              S.listItem()
                .title('About')
                .icon(MdInfo)
                .child(
                  S.editor()
                    .schemaType('about')
                    .documentId('about')
                ),
              S.listItem()
                .title('Contact')
                .icon(MdPhone)
                .child(
                  S.editor()
                    .schemaType('contact')
                    .documentId('contact')
                ),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title('Services')
        .icon(MdToys)
        .child(
          S.documentTypeList('services')
        ),
      S.divider(),
      S.listItem()
        .title('Site settings')
        .icon(MdSettings)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Settings')
        ),
      ...S.documentTypeListItems().filter(
        listItem =>
          !['home', 'about', 'contact', 'siteSettings', 'services'].includes(
            listItem.getId()
          )
      )
    ])