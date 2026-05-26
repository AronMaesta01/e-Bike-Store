const express = require('express');
const router = express.Router();

const bikeController = require('../controllers/bikeController');

router.get('/', bikeController.getBikes);

router.post('/', bikeController.createBike);

router.put('/:id', bikeController.updateBike);

router.delete('/:id', bikeController.deleteBike);

module.exports = router;
