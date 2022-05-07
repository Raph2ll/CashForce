const express = require('express');

const PORT = 3000;
const app = express();
app.use(express.json());

// app.use('/', );

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));
