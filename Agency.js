'use strict';

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    domain: {
      type: 'string',
      required: true,
      url: true
    },
    partnerId: {
      type: 'int',
      required: true,
      int: true
    },

    parent: {
      model: 'agency'
    },

    users: {
      collection: 'user',
      via: 'agency'
    },

    deactivated: {
      type: 'string',
      enum: ['false','true'],
      defaultsTo: 'false'
    },

    modules: {
      collection: 'agencyModule',
      via: 'agency',
      required: true
    },
    reportingList: {
      collection: 'reportingList',
      via: 'agency'
    },
    type: {
      type: 'string',
      enum: ['retail','reseller','enterprise'],
      defaultsTo: 'retail'
    }
  }
};
