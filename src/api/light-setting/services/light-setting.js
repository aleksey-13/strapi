'use strict';

/**
 * light-setting service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::light-setting.light-setting');
