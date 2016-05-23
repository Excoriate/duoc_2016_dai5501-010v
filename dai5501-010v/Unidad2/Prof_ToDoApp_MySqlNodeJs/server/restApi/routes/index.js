/**
 * Created by Alex Torres on 5/22/2016.
 */
//Este es el punto de intersección entre la capa de expressjs y la base de datos MongoDB.
(function (){
    'use strict';

    var express = require('express');
    var router = express.Router();
    var mongojs = require('mongojs');

    var db = mongojs('mongodb://dai5501:dai5501@ds011913.mlab.com:11913/todoapplication', ['task']); // Base de datos MongoJs que setearemos en mongolab.
    //Generamos entonces, el usuario, el password y la URI para conectarnos a nuestra base de datos mongojs



    /* Redirige hacia el home de la aplicación. */
    router.get('/', function(req, res) {
        res.render('index');
    });

    router.get('/api/alltask', function(req, res) {
        db.task.find(function(err, data) {
            res.json(data);
        });
    });

    router.post('/api/task', function(req, res) {
        db.task.insert(req.body, function(err, data) {
            res.json(data);
        });

    });

    router.put('/api/task', function(req, res) {

        db.task.update({
            _id: mongojs.ObjectId(req.body._id)
        }, {
            isCompleted: req.body.isCompleted,
            todo: req.body.todo
        }, {}, function(err, data) {
            res.json(data);
        });

    });

    router.delete('/api/task/:_id', function(req, res) {
        db.task.remove({
            _id: mongojs.ObjectId(req.params._id)
        }, '', function(err, data) {
            res.json(data);
        });

    });

    module.exports = router;

}());
