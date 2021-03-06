'use strict';

module.exports = {
  attributes: {
    provider: {
      type: 'string',
      required: true,
      enum: [
        'google',
        'googleLocal',
        'bing',
        'bingLocal',
        'yahoo',
        'yahooLocal'
      ]
    },
    data: {
      type: 'json',
      object: true
    },
    position: {
      type: 'integer',
      int: true
    },
    error: {
      type: 'string',
      defaultsTo: null
    },
    queueTime: {
      type: 'datetime',
      defaultsTo: null
    },
    startTime: {
      type: 'datetime',
      defaultsTo: null
    },
    endTime: {
      type: 'datetime',
      defaultsTo: null
    },
    pending: {
      type: 'boolean',
      defaultsTo: false
    },
    reportId: {
      type: 'string'
    },

    keyword: {
      model: 'keyword',
      required: true
    },
    client: {
      model: 'client',
      required: true
    }
  }
};
