const express = require('express');
const app = express();
const userRoutes = require('../src/modules/user/routes');
const productRoutes = require('../src/modules/product/routes');
const storeRoutes = require('../src/modules/store/routes');


app.set('title', 'E-commerce funcionaaaaa');
app.set('port', 3000);


app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/stores', storeRoutes);


const PORT = app.get('port');
app.listen(PORT, () => {
  console.log(`${app.get('title')} is running on port ${PORT}`);
});
