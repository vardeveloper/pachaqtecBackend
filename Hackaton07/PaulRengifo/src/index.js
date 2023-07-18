const express = require('express')
const app = express()
const user = require('./routes/users');
const product = require('./routes/products');
const category = require('./routes/categories');
const order = require('./routes/orders');


app.set('title', 'Aplicacion hecha en Node.js');
app.set('port', 3000);

//app.use(express.urlencoded({extended : true}));
app.use(express.json())

app.use('/users', user);
app.use('/products', product);
app.use('/categories', category);
app.use('/orders', order);

app.listen(app.get('port'), ()=>{
    console.log(`Mi ${app.get('title')} está corriendo en el puerto ${app.get('port')}`);
})