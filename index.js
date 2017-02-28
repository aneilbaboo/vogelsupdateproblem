var vogels = require('vogels');
var joi = require('joi');
// const AWS = vogels.AWS;

var vogels = require('vogels');
vogels.AWS.config.update({
  accessKeyId: 'AKID',
  secretAccessKey: 'SECRET',
  region: "REGION",
  "endpoint": 'http://localhost:8000'
});

var TestModel = vogels.define('TestModel', {
  hashKey : 'id',

  // add the timestamp attributes (updatedAt, createdAt)
  timestamps : true,

  schema : {
    id      : joi.string(),
    num     : joi.number()
  }
});

vogels.createTables(function(err) {
  if (err) {
    console.log('Error creating tables: ', err);
  } else {
    console.log('Tables have been created');

    var test = new TestModel({id: "1"});

    test.save(function (err, tSaved) {
      console.log("Attempting to update num to 100");
      tSaved.update({num: 100}, function (err, tUpdated) {
        if (tUpdated.get('num')==100) {
          console.log("Successfully updated test.num => 100!");
        } else {
          console.log("Failed to update test instance: %j", tUpdated.attrs);
        }

      });
    });
  }
});
