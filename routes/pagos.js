const express = require('express');
const Pago = require('../models/pagos');
const router = express.Router();

router.get('/', async (req, res) => {
  const pagos = await Pago.findAll();
  res.json(pagos);
});

router.get('/:cedula', async (req, res) => {
  const pago = await Pago.findOne({ where: { cedula: req.params.cedula } });
  if (pago) {
    res.json(pago);
  } else {
    res.status(404).json({ error: 'Pago no encontrado' });
  }
});

router.post('/', async (req, res) => {
  try {
    const pago = await Pago.create(req.body);
    res.status(201).json(pago);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:cedula', async (req, res) => {
  const pago = await Pago.findOne({ where: { cedula: req.params.cedula } });
  if (pago) {
    await pago.update(req.body);
    res.json(pago);
  } else {
    res.status(404).json({ error: 'Pago no encontrado' });
  }
});

router.delete('/:cedula', async (req, res) => {
  const pago = await Pago.findOne({ where: { cedula: req.params.cedula } });
  if (pago) {
    await pago.destroy();
    res.json({ message: 'Pago eliminado' });
  } else {
    res.status(404).json({ error: 'Pago no encontrado' });
  }
});

module.exports = router;