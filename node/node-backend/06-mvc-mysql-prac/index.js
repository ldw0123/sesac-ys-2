const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require('./routes'); // ./routes/index.js를 불러온다
app.use('/', router);
app.use('/user', router);

app.get('*', (req, res) => {
  res.send('접근할 수 없는 주소입니다.');
});

app.listen(port, () => {
  console.log('Server Port : ', port);
});
