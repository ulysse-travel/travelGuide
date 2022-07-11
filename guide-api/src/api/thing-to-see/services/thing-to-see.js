'use strict';

/**
 * thing-to-see service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::thing-to-see.thing-to-see');
