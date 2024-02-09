module.exports = ({ env }) => ({
        'publisher': {
            enabled: true,
            // config: {
            //     hooks: {
            //         beforePublish: async ({ strapi, uid, entity }) => {
            //             console.log('beforePublish');
            //         },
            //         afterPublish: async ({ strapi, uid, entity }) => {
            //             console.log('afterPublish');
            //         },
            //         beforeUnpublish: async ({ strapi, uid, entity }) => {
            //             console.log('beforeUnpublish');
            //         },
            //         afterUnpublish: async ({ strapi, uid, entity }) => {
            //             console.log('afterUnpublish');
            //         },
            //     },
            // },
        },
        'drag-drop-content-types': {
            enabled: true
        },
        email: {
            config: {
                provider: 'nodemailer',
                providerOptions: {
                    host: env('SMTP_HOST', 'mbx02.kipk.ru'),
                    port: env('SMTP_PORT', 25),
                    auth: {
                      user: env('SMTP_USERNAME'),
                      pass: env('SMTP_PASSWORD'),
                    },
                  // ... any custom nodemailer options
                },
                settings: {
                    defaultFrom: 'history24@kipk.ru',
                    defaultReplyTo: 'history24@kipk.ru',
                },
            },
        },
      // ...
  });