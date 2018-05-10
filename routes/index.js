var express = require('express');
var router = express.Router();

const UserRoutes = require('./users');
const app = express();

app.use('/users', UserRoutes);

/* GET home page. */
router.get('/api', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
