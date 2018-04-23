const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Comments
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status().json(err));
  },
  findById: function(req, res) {
    db.Comments
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status().json(err));
  },
  create: function(req, res) {
    db.Comments
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status().json(err));
  },
  update: function(req, res) {
    db.Comments
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status().json(err));
  },
  remove: function(req, res) {
    db.Comments
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status().json(err));
  }
};
