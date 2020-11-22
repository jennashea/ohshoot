var { buildSchema } = require('graphql');

// TODO: Schema
var schema = buildSchema(`
  type Shoot {
    id: int,
    name: String,
    client: String
  }
`);

function createShoot() {

}

function deleteShoot(int shoot_id) {

}


function insertTags() {

}
