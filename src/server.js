const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3060;

app.use(cors());
app.use(express.json());
app.use(require('./app/router'));
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT || PORT, () => {
  console.log(`Servidor ativo | http://localhost:${PORT}`);
});