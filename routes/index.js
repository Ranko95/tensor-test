const router = require('express').Router();

router.get('/', (req, res, next) => {
  try {
    res.sendFile('index.html', { root: __dirname });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
