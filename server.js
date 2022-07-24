const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/user')

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
const uri = process.env.MONGO_URL;

mongoose.connect(uri);
const connection = mongoose.connection;

connection.once("open",()=>{
    console.log('cool!!!')
});

app.listen(3000,()=>{
    console.log('OK!!!')
});

//! REQUEST SYNTAXE

app.post('/add', async (req,res)=>{
    try {
        data = req.body;
        userModel = new User(data);
        finalUser = await userModel.save();
        
    } catch (error) {
        res.send(error)
    }
})

app.get('/get', ()=>{
    console.log('Get Success!!!')
})

app.delete('/delete', ()=>{
    console.log('Delete Success!!!')
})

app.put('/put', ()=>{
    console.log('Put Success!!!')
})
