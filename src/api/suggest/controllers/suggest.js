'use strict';

/**
 * suggest controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::suggest.suggest');
