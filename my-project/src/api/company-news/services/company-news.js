'use strict';

/**
 * company-news service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::company-news.company-news');
