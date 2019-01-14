const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config()

const app = express();
app.use( bodyParser.json() );

massive( process.env.CONNECTION_STRING ).then( dbInstance => {
  app.set('db', dbInstance)
})
.catch( err => console.log(err) );


  app.get( '/api/products', products_controller.create_product );
 

  app.get( '/api/products', products_controller.getAll );
  
  app.delete( '/api/products/:id', products_controller.delete );


const port = process.env.PORT || 4000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );