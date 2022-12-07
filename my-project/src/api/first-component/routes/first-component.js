'use strict';

/**
 * first-component router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::first-component.first-component');
