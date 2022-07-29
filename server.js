const { response } = require('express')
const express = require('express')
const app = express()
//const MongoClient = require('mongodb').MongoClient
//require('dotenv').config()
const PORT = 8000

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
//app.use(express.json())
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})

app.get('/', (req, res) => {
    console.log('attempting')
    
    res.render('index.ejs', {})
    //res.sendFile(__dirname + '/indextest.html')

    .catch(error => console.error(error))
})