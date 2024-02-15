'use strict';

/**
 * suggest router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::suggest.suggest');
