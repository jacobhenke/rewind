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
      url: true,
      index: true,
      unique: true
    },
    domainCustomer: {
      type: 'string',
      url: true,
      index: true,
      unique: true
    },
    partnerId: {
      type: 'integer',
      int: true,
      index: true
    },

    parent: {
      model: 'agency'
    },

    users: {
      collection: 'user',
      via: 'agency'
    },

    deactivated: {
      type: 'boolean',
      defaultsTo: false
    },

    invoiced: {
      type: 'boolean',
      defaultsTo: false
    },

    apiKey: {
      type: 'string'
    },

    modules: {
      collection: 'agencyModule',
      via: 'agency',
      required: true
    },
    reportingListDefault: {
      model: 'reportingList'
    },
    reportingLists: {
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
