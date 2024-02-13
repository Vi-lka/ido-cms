'use strict';

/**
 * suggest-description service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::suggest-description.suggest-description');
