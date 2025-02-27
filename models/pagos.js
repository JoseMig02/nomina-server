const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Pago = sequelize.define('Pago', {
  cedula: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  monto: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  cuentaBancaria: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipoMoneda: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fechaPago: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
});

module.exports = Pago;
