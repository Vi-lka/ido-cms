module.exports = {  
    '*/5 * * * *': async ({ strapi }) => {
        console.log('cron running')
        try {
            let currentDate = new Date()
            //get each element from the current date
            let year = currentDate.getFullYear()
            let month = currentDate.getMonth()
            let day = currentDate.getDate()
            let hours = currentDate.getHours()
            let minutes = currentDate.getMinutes()
            let seconds = currentDate.getSeconds()
            let milliseconds = currentDate.getMilliseconds()
            //build the new date according the changes you want to do
            let newDate = new Date(year, month, day - 7, hours, minutes, seconds, milliseconds )

            const events = await strapi.entityService.findMany('api::event.event', {
                filters: { createdAt: { $gt: newDate.toISOString() } },
            });
            const methodResources = await strapi.entityService.findMany('api::method-resource.method-resource', {
                filters: { createdAt: { $gt: newDate.toISOString() } },
            });
            const books = await strapi.entityService.findMany('api::book.book', {
                filters: { createdAt: { $gt: newDate.toISOString() } },
            });
            const news = await strapi.entityService.findMany('api::new.new', {
                filters: { createdAt: { $gt: newDate.toISOString() } },
            });
            const projects = await strapi.entityService.findMany('api::project.project', {
                filters: { createdAt: { $gt: newDate.toISOString() } },
            });

            const allCount = events.length + methodResources.length + books.length + news.length + projects.length

            if (allCount === 0) {
                strapi.log.debug('📺: ', "No new content.");
            } else {
                const users = await strapi.plugins['users-permissions'].services.user.fetchAll()

                const subscribedUsers = users.filter(user => user.subscribed );
    
                await Promise.all(subscribedUsers.map(async (user, i) => {
                    return await strapi
                    .plugin('email-designer')
                    .service('email')
                    .sendTemplatedEmail(
                      {
                        // required
                        to: user.email,
                        // attachments: [],
                      },
                      {
                        // required - Ref ID defined in the template designer (won't change on import)
                        templateReferenceId: 1,
                        // Can include variables like `Thank you for your order {{= USER.firstName }}!`
                        subject: `История края - Новый контент`,
                      },
                      // {
                      //   // this object must include all variables you're using in your email template
                      //   USER: {
                      //     firstname: 'John',
                      //     lastname: 'Doe',
                      //   },
                      //   order: {
                      //     products: [
                      //       { name: 'Article 1', price: 9.99 },
                      //       { name: 'Article 2', price: 5.55 },
                      //     ],
                      //   },
                      //   shippingCost: 5,
                      //   total: 20.54,
                      // }
                    );
                }))
            }
          } catch (err) {
            strapi.log.debug('📺: ', err);
          }
    },
}