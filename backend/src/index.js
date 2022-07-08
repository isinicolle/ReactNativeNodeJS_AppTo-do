import app from './app'

app.listen(app.get('port'))
console.log('Servidor ejecutandose Pon en el navegador: http://localhost/', app.get('port'))