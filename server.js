const express = require('express'); 
const mongoose = require('mongoose');

const app = express(); 

//DB Config 
const db = require('./config/keys').mongoURI;

//Connect to the database through mongoose 
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => {
        console.log('Mongodb Connected');
    })
    .catch( (err) => {

        if(err){
            console.log("Something wrong with the database, there is an error" + err); 
        }

    });

app.get('/', (req, res) => {

    res.send('Hello');

}); 

const port = process.env.PORT || 5000; 

app.listen(port, () => {

    console.log('Server running on ' + port ); 
});

