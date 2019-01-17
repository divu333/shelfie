// const express = require('express');
// const bodyParser = require('body-parser');
// const massive = require('massive');
// const controller = require('./controller')

// require('dotenv').config()


// const app = express();
// app.use( bodyParser.json() );

// massive( process.env.CONNECTION_STRING ).then( dbInstance => {
//   app.set('db', dbInstance)
// })
// .catch( err => console.log(err) );


//   app.get( '/api/products', controller.create_product );
 

//   app.get( '/api/products', controller.getAll );
  
//   app.delete( '/api/products/:id', controller.delete );


// const port = process.env.PORT || 4000;
// app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );

const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();


const app= express()
app.use( bodyParser.json() );
app.use( express.static( __dirname + '/../public/build' ) );
massive(process.env.CONNECTION_STRING)
.then(db=>{
    app.set("db", db)
})
.catch(err => console.log(err))

app.get('/api/inventory', controller.read)
app.post('/api/inventory', controller.create)
app.delete('/api/inventory/:id', controller.delete)
app.put('/api/inventory/:id', controller.update)
app.get('/api/inventory/:id', controller.getOne)

const port = 4000

app.listen(port, () => {
    console.log(`Server listening at localhost:${port}`);
});