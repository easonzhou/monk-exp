const monk = require('monk');

const db = monk("localhost:27017/passport");
const users = db.get("users");
//const gfs = Grid(db, monk);

module.exports = {
    db : db,
    users : users,
//    gfs : gfs,
};
