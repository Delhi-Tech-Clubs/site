import express from 'express';
import { dtcLogo } from 'atharv-mandlavdiya';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Delhi Tech Clubs', logo: dtcLogo() });
});

export default router;
