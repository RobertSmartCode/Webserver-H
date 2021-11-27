require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
        res.render('home',{ 
                nombre : 'Robert Smart',  
                titulo : 'Node-Express'

        });
})
app.get('/generic', (req, res) => {
        res.render('generic',{
                nombre : 'Robert Smart',  
                titulo : 'Node-Express'
        });
})
app.get('/elements', (req, res) => {
        res.render('elements',{ 
                nombre : 'Robert Smart',  
                titulo : 'Node-Express'
        });
})

app.get('/elements', (req, res) => {
        res.sendFile(__dirname + '/public/elements.html')
})
app.get('/generic', (req, res) => {
        res.sendFile(__dirname + '/public/generic.html')
})
app.get('*', (req, res) => {
        res.sendFile(__dirname + '/public/back/404.html')
})

app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
})