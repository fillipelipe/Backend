const express = require ('express');
const app = express();

app.get('/',(req, res)=> {
    res.send('Resposta da rota GET/')
}
)

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Servidor express ouvindo na porta ${PORT}')
});

module.exports = app;