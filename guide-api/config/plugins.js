module.exports = ({ env }) => ({

    transformer: {
        enabled: true,
        config: {
            prefix: '/api/',
            responseTransforms: {
                removeAttributesKey: false,
                removeDataKey: true,
            },
        },
    },
    slugify: {
        enabled: true,
        config: {
          contentTypes: {
            guidesList: {
              field: 'slug',
              references: 'title',
            },
          },
        },
      },    
    
});