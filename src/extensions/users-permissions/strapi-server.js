module.exports = (plugin) => {
    plugin.controllers.user.updateMe = async (ctx) => {
        if (!ctx.state.user || !ctx.state.user.id) {
            return ctx.response.status = 401;
        }
        // Extract only the fields that need to be updated from the request body
        const updatedUserData = {
        // ...ctx.request.body,
            subscribed: ctx.request.body.subscribed,
            suggest: ctx.request.body.suggest
            // username: ctx.state.user.username || ctx.request.body.username,
            // email: ctx.state.user.email || ctx.request.body.email,
        // change the above code to reflect the fields you want the user to be able to update. 
        };
        try {
        // Update the user data in the database
            await strapi.query('plugin::users-permissions.user').update({
                where: { id: ctx.state.user.id },
                data: updatedUserData, 
            });
            ctx.response.status = 200;
        } catch (error) {
            console.error('Error updating user data:', error);
            ctx.response.status = 500;
        }
    };
    plugin.routes['content-api'].routes.push({
        method: "PUT",
        path: "/user/me",
        handler: "user.updateMe",
        config: {
            prefix: "",
            policies: []
        }
    });
    return plugin;
}