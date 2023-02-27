var express = require('express');
var router = express.Router();

let Project = require('../models/Project.model')

/* GET home page. */
router.post("/", (req, res, next) => {
    const { title, description } = req.body;
   
    Project.create({ title, description, tasks: [] })
      .then(response => res.json(response))
      .catch(err => res.json(err));
  });

module.exports = router;