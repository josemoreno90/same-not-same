const router = require('express').Router();

router.get('/new', (request, response) => {
  response.render('member/new')
})


module.exports = router;
