
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
                  templateReferenceId: 4,
                  // Can include variables like `Thank you for your order {{= USER.firstName }}!`
                  subject: `История края - Новый запрос на обратную связь`,
                },
            );
        } catch (err) {
            strapi.log.debug('📺: ', err);
        }
    },

}