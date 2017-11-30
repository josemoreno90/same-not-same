const router = require('express').Router();

router.get('/new', (request, response) => {
  response.render('member/index')
})


module.exports = router;
