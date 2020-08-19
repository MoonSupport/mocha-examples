const app = require('../server/app.js');
const supertest = require("supertest");
const assert = require('assert')

const request = supertest(app);


describe('grahpql test', function() {
  it('return json response', function() {
    request
    .post("/graphql")
    .send({
        query: "{ hello }",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        assert.deepEqual(res.body, {data: {
            "hello" : "Hello world!"
        }});
      });
  })
})