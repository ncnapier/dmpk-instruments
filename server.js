
const express = require('express')
const req = require('express/lib/request')
const app = express()
const  MongoClient  = require('mongodb').MongoClient
const PORT = 8000

require('dotenv').config()

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'new-database'

MongoClient.connect(dbConnectionStr, {useUnifiedTopology: true})
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db('new-database')
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})


app.get('/', (req, res)=>{
    db.collection('quotes').find().toArray()
    .then(data =>{
        res.render('index.ejs', { info: data })
    })
    .catch(error => console.error(error))
})
app.get('/instrument.ejs', (req, res)=>{
    db.collection('instruments').find().toArray()
    .then(data =>{
        
        res.render('instrument.ejs', { info: data })
    })
    .catch(error => console.error(error))
})
//tecan
app.get('/tecan.ejs', (req, res)=>{
    
    db.collection('tecan').find().toArray()
    .then(data =>{
        
        res.render('tecan.ejs', { info: data })
    })
    .catch(error => console.error(error))
})
//tecan submit
app.post('/tecan', (req, res)=>{
    db.collection('tecan').insertOne(req.body)
    .then(results =>{
        res.redirect('/tecan.ejs')
    })
})
//tays submit
app.post('/trays', (req, res)=>{
    db.collection('trays').insertOne(req.body)
    .then(results =>{
        res.redirect('/instrument.ejs')
    })
})
app.get('/instrument/api/inst', (req, res)=>{
    db.collection('instruments').find().toArray()
        .then(results=>{
            console.log(results)
            res.json(results)
        })
})
app.get('/instrument/api/tray', (req, res)=>{
    db.collection('trays').find().toArray()
        .then(results=>{
            console.log(results)
            res.json(results)
        })
})

app.post('/chat', (req, res)=>{
    db.collection('quotes').insertOne(req.body)
    .then(results =>{
        res.redirect('/')
    })
})

app.post('/instrument', (req, res)=>{
    db.collection('instruments').insertOne(req.body)
    .then(results =>{
        res.redirect('/instrument.ejs')
        
    })
})
//submit button on 5500
app.post('/instrumentB', (req, res)=>{
    db.collection('instrumentsB').insertOne(req.body)
    .then(results =>{
        res.redirect('/instrument.ejs')
    })
})

app.post('/instrumentC', (req, res)=>{
    db.collection('instrumentsC').insertOne(req.body)
    .then(results =>{
        res.redirect('/instrument.ejs')
    })
})

app.post('/instrumentD', (req, res)=>{
    db.collection('instrumentsD').insertOne(req.body)
    .then(results =>{
        res.redirect('/instrument.ejs')
    })
})

app.delete('/deleteRapper', (req, res) => {
    db.collection('quotes').deleteOne({time: req.body.time})
    .then(result => {
        console.log('Rapper Deleted')
        res.json('Rapper Deleted')
    })
    .catch(error => console.error(error))

})

app.delete('/deleteRes', (req, res) => {
    db.collection('instruments').deleteOne({dateend: req.body.dateend})
    .then(result => {
        console.log('Rapper Deleted')
        res.json('Rapper Deleted')
    })
    .catch(error => console.error(error))

})

app.delete('/deleteResTecan', (req, res) => {
    db.collection('tecan').deleteOne({dateendT: req.body.dateendT})
    .then(result => {
        console.log('Tecan Deleted')
        res.json('Rapper Deleted')
    })
    .catch(error => console.error(error))

})

app.delete('/deleteResB', (req, res) => {
    db.collection('instruments').deleteOne({dateendB: req.body.dateendB})
    .then(result => {
        console.log('Rapper Deleted')
        res.json('Rapper Deleted')
    })
    .catch(error => console.error(error))

})

app.delete('/deleteResC', (req, res) => {
    db.collection('instruments').deleteOne({dateendC: req.body.dateendC})
    .then(result => {
        console.log('Rapper Deleted')
        res.json('Rapper Deleted')
    })
    .catch(error => console.error(error))

})

app.delete('/deleteResD', (req, res) => {
    db.collection('instruments').deleteOne({dateendD: req.body.dateendD})
    .then(result => {
        console.log('Rapper Deleted')
        res.json('Rapper Deleted')
    })
    .catch(error => console.error(error))

})

