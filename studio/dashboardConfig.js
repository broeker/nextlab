export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f6f8f943bbe8636edb6fe2c',
                  title: 'Sanity Studio',
                  name: 'nextlab-studio',
                  apiId: 'fbc09027-88b6-4d1d-9f93-135c148d116d'
                },
                {
                  buildHookId: '5f6f8f9410832138b2bff9fd',
                  title: 'Landing pages Website',
                  name: 'nextlab-web',
                  apiId: 'ae152b05-3625-4a00-addc-fa5d7f56ae85'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/broeker/nextlab',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nextlab-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
