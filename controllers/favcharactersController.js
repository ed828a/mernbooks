const db = require("../models");
// const jwtDecode = require('jwt-decode');
// console.log(jwtDecode(accessString).id)
module.exports = {
  findAll: function(req, res) {
    db.favcharacters.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.favcharacters.findById(req.params.userid)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findbyuser: function(req, res) {
db.favcharacters.find({
  userID : req.params.userid
})
.then(dbResult => res.json(dbResult))
.catch(err => res.status(422).json(err));
  } ,
  create: function(req, res) {
    console.log("req.body")
    console.log(req.body)
    db.favcharacters.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.favcharacters.findOneAndUpdate({ _id: req.params.userid }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.favcharacters.findById({ _id: req.params.userid })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getbyname: function(req, res) {
    console.log("req.params");
    console.log(req.params);  
    db.favcharacters.find({ title: {$regex: req.params.title} }, req.body)
    .sort({ name: 1 })
    .skip(parseInt(req.params.offset))
    .limit(100)
      .then(dbResult => res.json(dbResult))
      .catch(err => res.status(404).json(err));
  },
  getAllbynamereverse: function(req, res) {
    console.log(req.params)
    // still need to check
    // var OFFSET = req.params.offset
    db.favcharacters
    .find(req.query)
    .sort({ name: -1 })
    .skip(parseInt(req.params.offset))
    .limit(100)
    // .skip(req.params.offset)
    .then(dbResult => res.json(dbResult))
      .catch(err => res.status(404).json(err));
  },
};
