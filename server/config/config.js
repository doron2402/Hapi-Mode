/**
 * Created by yauriedogawa on 4/12/14.
 */
"use strict";

module.exports = {
  server: {
    port: 3000,
    host: "localhost"
  },
  mongodb: {
    db: "hapimode",
    host: "localhost"
  },
  secret: "thisiskeyforencryption" ,
  log: {
    response: false,
    request: false
  }
};