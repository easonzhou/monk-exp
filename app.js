var db = require("./db.js");
var users = db.users;
//var gfs = db.gfs;
const Grid = require('gridfs');
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

users.find({}).then((docs) => {
    console.log("docs is ", docs);
});

MongoClient.connect("mongodb://localhost:27017/passport")
    .then(function(response) {
        console.log("DATABASE LOADED.");

        gfs = Grid(response, mongo);

        gfs.fromFile({filename: "test.txt"}, "./test.txt", function (err, file) {
            if(err) {
                console.log(err);
            } else {
                console.log('Create a new GridFS file %s', JSON.stringify(file, null, 2));
            }
        });
    }).catch(function(err){
        console.log("DB Connection Error: " + err);
    });
