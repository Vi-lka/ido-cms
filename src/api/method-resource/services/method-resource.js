'use strict';

/**
 * method-resource service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::method-resource.method-resource');
