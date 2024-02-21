
module.exports = {

    async afterCreate() {
        try {
            await strapi.plugin('email-designer').service('email').sendTemplatedEmail(
                {
                  // required
                  to: "history24@kipk.ru",
                  // attachments: [],
                },
                {
                  // required - Ref ID defined in the template designer (won't change on import)
                  templateReferenceId: 2,
                  // Can include variables like `Thank you for your order {{= USER.firstName }}!`
                  subject: `История края - Новый запрос на публикацию`,
                },
            );
        } catch (err) {
            strapi.log.debug('📺: ', err);
        }
    },

    async afterUpdate(event) {
        const { data, where } = event.params

        if (data.publishedAt !== null && data.publishedAt !== undefined) {
            const id = where.id;
            const existingData = await strapi.entityService.findOne("api::suggest.suggest", id, {
                populate: ["user"],
            })

            console.log(existingData.accepted)

            if (existingData.accepted) {
                try {
                    await strapi.plugin('email-designer').service('email').sendTemplatedEmail(
                        {
                          // required
                          to: existingData.user.email,
                          // attachments: [],
                        },
                        {
                          // required - Ref ID defined in the template designer (won't change on import)
                          templateReferenceId: 3,
                          // Can include variables like `Thank you for your order {{= USER.firstName }}!`
                          subject: `История края - Мы рассмотрели вашу публикацию`,
                        },
                    );
                } catch (err) {
                    strapi.log.debug('📺: ', err);
                }
            } else {
                try {
                    await strapi.plugin('email-designer').service('email').sendTemplatedEmail(
                        {
                          // required
                          to: existingData.user.email,
                          // attachments: [],
                        },
                        {
                          // required - Ref ID defined in the template designer (won't change on import)
                          templateReferenceId: 4,
                          // Can include variables like `Thank you for your order {{= USER.firstName }}!`
                          subject: `История края - Мы рассмотрели вашу публикацию`,
                        },
                    );
                } catch (err) {
                    strapi.log.debug('📺: ', err);
                }
            }
        }
    },

}