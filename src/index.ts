import express from 'express';
import * as util from 'util';
// import * as classTransformer from 'class-transformer';
// import 'reflect-metadata';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/echo', (req, res) => {
  // res.send(JSON.stringify(req));
  // const req_jsobj = classTransformer.instanceToPlain(req, {
  //   enableCircularCheck: true,
  // });
  res.send(util.inspect(req));
});

const router = express.Router();
app.use('/v1/test', router);
router.get('/users/:username', (req, res, next) => {
  res.send(req.params.username);
});

app.all('*', (req, res) => {
  res.status(202).send('No such route');
});

app.listen(3000, () => {
  console.log('App started on port 3000');
});
