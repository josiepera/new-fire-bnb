const express = require('express');
const router = express.Router()

const controller = require('../controller/airbnb-controller')

router.get('/:id', controller.show);

router.route('/')
  .post(
    controller.create,
    controller.add
  )

router.route('/')
  .get(
    controller.index
  )

router.route('/:id')
  .put(
    controller.update,
    controller.updateHost
    )

router.delete('/:id', controller.destroy);


module.exports = router;
