const router = require('express').Router();
const memberRoutes = require('./member')


router.get('/', (req, res, next) => {
  res.render('member/index')
})

router.use('/member', memberRoutes);


module.exports = router;
