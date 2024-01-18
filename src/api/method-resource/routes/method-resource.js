'use strict';

/**
 * method-resource router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::method-resource.method-resource');
