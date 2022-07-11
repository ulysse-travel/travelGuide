'use strict';

/**
 * guides-list service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::guides-list.guides-list');
