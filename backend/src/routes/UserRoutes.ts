import { Router } from 'express';

const router = Router();

router.get('/welcome', (req, res) => {
  res.send('welcome API');
});
router.get('/data', (req, res) => {
  res.send('mydata API');
});
router.get('/test', (req, res) => {
  res.send('mydata API');
});

export default router;
