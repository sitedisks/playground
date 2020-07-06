const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = process.env.port || 3000;

const connString = 'mongodb+srv://kontactobe:@@Xpand42@tobe.ksihv.mongodb.net/park?retryWrites=true&w=majority';

// promise mongo
MongoClient.connect(connString, { useUnifiedTopology: true })
    .then(client => {
        console.log("MongoDB Altas Connnected!");

        const db = client.db('redbull');
        const quotesCollection = db.collection('quotes');


        // Make sure you place body-parser before your CRUD handlers!
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        app.use(express.static('public'));

        app.set('view engine', 'ejs');

        // demo res.send
        app.get('/demo', (req, res) => {
            res.send('This is the demo');
        });

        // demo res.sendFile
        app.get('/file', (req, res) => {
            res.sendFile(__dirname + '/index.html');
        })

        app.post('/quotes', (req, res) => {
            console.log(req.body);
            quotesCollection.insertOne(req.body)
                .then(result => {
                    console.log(result);
                    res.redirect('/');
                })
                .catch(error => { console.log(error) });
        });

        app.put('/quotes', (req, res) => {
            quotesCollection.findOneAndUpdate(
                { name: 'Yoda' },
                {
                    $set: {
                        name: req.body.name,
                        quote: req.body.quote
                    }
                },
                {
                    upsert: true
                }
            )
                .then(result => {
                    console.log(result);
                    res.json('Success');
                })
                .catch(error => console.error(error))
        });

        app.delete('/quotes', (req, res) => {
            quotesCollection.deleteOne(
                { name: req.body.name }
            )
                .then(result => {
                    if(result.deletedCount ===0)
                        return res.json('No quote to delete');
                    res.json(`Deleted Darth Vadar's quote`)
                })
                .catch(error => console.error(error))

        });

        // template engine: Pug, Embedded JS, Nunjucks etc.
        app.get('/', (req, res) => {
            const cursor = db.collection('quotes').find().toArray()
                .then(results => {
                    console.log(results);
                    res.render('index.ejs', { quotes: results });
                })
                .catch(error => {
                    console.log(error);
                });

        });

        app.listen(port, () => {
            console.log('Listening at ' + port);
        })

    })
    .catch(err => console.log(err));



