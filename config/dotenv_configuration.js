import dotenv from 'dotenv';

const environment = process.env.NODE_ENV || 'development';

dotenv.config({
  silent: true,
  path: `.env.${environment}`
})
