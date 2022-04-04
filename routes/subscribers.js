const express = require('express');
const res = require('express/lib/response');
const Subscriber = require('../models/subscriber');

const router = express.Router();

// Getting all
router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Getting one
router.get('/:id', (req, res) => {
  res.send(req.params.id);
});
// Creating one
router.post('/', (req, res) => {});

// Updating one
router.patch('/', (req, res) => {});

// Deleting one
router.delete('/:id', (req, res) => {});

module.exports = router;
