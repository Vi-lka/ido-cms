'use strict';

module.exports = {
  
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    const { toEntityResponse } = strapi.plugin("graphql").service("format").returnTypes;
    const extensionService = strapi.plugin('graphql').service('extension');

    extensionService.use(({ nexus }) => ({
      types: [
        nexus.extendType({
          type: 'UsersPermissionsMe',
          definition(t) {
            // here define fields you need
            t.string('subscribed');
            t.field("suggest", {
              type: "SuggestEntityResponse",
              resolve: async (root, args) => {
                const userData = await strapi.db.query("plugin::users-permissions.user").findOne({
                  select: [],
                  where: { id: root.id },
                  populate: { suggest: true },
                });
                return toEntityResponse(userData.suggest ?? null, {
                  args,
                  resourceUID: "api::suggest.suggest",
                });
              },
            });
          },
        }),
      ]
    }));
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
