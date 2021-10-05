const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();


mongoose.connect(process.env.DB_USER , {useNewUrlParser: true});

mongoose.connection.once('open', () => {
    console.log('connected to database');
});



app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))













app.listen(3000, () => console.log('Server started on port 3000'));