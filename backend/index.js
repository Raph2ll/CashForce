const express = require('express');

const PORT = 3000;
const app = express();
app.use(express.json());

app.use('/', require('./controller/router'));

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));
