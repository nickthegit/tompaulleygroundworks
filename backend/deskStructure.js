import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      // Make a new list item
      S.listItem()
        // Give it a title
        .title('Pages')
        .child(
          // Make a list in the second pane called Portfolio
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home')
                .child(
                  S.editor()
                    .schemaType('home')
                    .documentId('home')
                )
            ])
        ),
      ...S.documentTypeListItems().filter(
        listItem =>
          !['home'].includes(
            listItem.getId()
          )
      )
    ])