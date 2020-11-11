export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fab2dce25709a390f72cb57',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pmhwo7ky',
                  apiId: 'aa9a5650-ca22-4a9a-9032-b2854be678ce'
                },
                {
                  buildHookId: '5fab2dce25709a45f672c6d4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-9qq44wbn',
                  apiId: '04200876-664b-4646-8548-755a2ebad22b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kvasss/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-9qq44wbn.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
