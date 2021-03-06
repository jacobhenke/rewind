'use strict';

var md5 = require('md5');

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true,
      index: true
    },
    password: {
      type: 'string',
      required: true
    },
    salt: {
      type: 'string',
      required: true
    },
    agency: {
      model: 'agency',
      required: true
    },
    type: {
      type: 'string',
      enum: ['agency','fulfillment','support','admin','sales','agent','manager'],
      required: true
    },
    toJSON: function () {
      var obj = this.toObject();
      delete obj.password;
      delete obj.salt;
      return obj;
    } 
  },
  beforeValidate: function (values, cb) {
    var hrtime = process.hrtime();
    values.salt = md5(hrtime + "warpath forever!");
    cb();
  } 
    
};  
