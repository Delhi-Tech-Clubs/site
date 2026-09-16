import { atharvm } from 'atharv-mandlavdiya';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import dtc from './dtc.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 3000;

dtc.use('/atharv-mandlavdiya.js', express.static(join(__dirname, 'node_modules/atharv-mandlavdiya/atharvmandlavdiya.js')));

dtc.listen(port, () => {
  atharvm();
});
