const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cor')

if (process.env.NODE_ENV === 'local') {
  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }))
} else {
  app.use(cors({
    credentials: true
  }))
}

