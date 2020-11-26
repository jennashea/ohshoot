var { buildSchema } = require('graphql');

// TODO: Schema
var schema = buildSchema(`
  type Shoot {
    id: int,
    name: String,
    client: String,
    subject: String,
    shoot_date: Date,
    shoot_loc: String,
    storage_loc: String,
    tags: [int]
  }
`);

function createShoot() {

}

function deleteShoot(int shoot_id) {

}


function insertTags() {

}
