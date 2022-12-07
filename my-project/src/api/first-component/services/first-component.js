'use strict';

/**
 * first-component service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::first-component.first-component');
