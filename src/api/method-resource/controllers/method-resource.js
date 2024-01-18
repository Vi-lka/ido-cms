'use strict';

/**
 * method-resource controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::method-resource.method-resource');
