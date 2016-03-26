/**
 * Created by Alex Torres on 3/23/2016.
 */

var restify = require('restify');
var mongojs = require('mongojs');

var server = restify.createServer();
var dbMongoJs= mongojs('mongodb://mongo:mongomaster@ds051873.mlab.com:51873/mongosecluddb',['products']);

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

//Start node Serer with ExpressJs. Middleware.
server.listen(81, function(){
    console.log("NodeJs Server started in port @4000");
});

//Get all products.
server.get("/products", function(req, res, next){

    dbMongoJs.products.find(function(err, products){
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });

        if(err){
            console.log("Somethings has failed!");
            console.log(err);
        }else{
            res.end(JSON.stringify(products));
        }

    });
    return next();
});

server.post('/productsPush1', function (req, res, next) {
    var product = req.params;
    dbMongoJs.products.save(product,
        function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'application/json; charset=utf-8'
            });
            res.end(JSON.stringify(data));
        });
    return next();
});

server.post('/productsPush2', function (req, res, next) {
    var product = req.params;
    dbMongoJs.products.save(product,
        function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'application/json; charset=utf-8'
            });
            res.end(JSON.stringify(data));
        });
    return next();
});

server.post('/productsPush3', function (req, res, next) {
    var product = req.params;
    dbMongoJs.products.save(product,
        function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'application/json; charset=utf-8'
            });
            res.end(JSON.stringify(data));
        });
    return next();
});

server.post('/productsPush4', function (req, res, next) {
    var product = req.params;
    dbMongoJs.products.save(product,
        function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'application/json; charset=utf-8'
            });
            res.end(JSON.stringify(data));
        });
    return next();
});

server.post('/productsPush5', function (req, res, next) {
    var product = req.params;
    dbMongoJs.products.save(product,
        function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'application/json; charset=utf-8'
            });
            res.end(JSON.stringify(data));
        });
    return next();
});

server.post('/productsPush6', function (req, res, next) {
    var product = req.params;
    dbMongoJs.products.save(product,
        function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'application/json; charset=utf-8'
            });
            res.end(JSON.stringify(data));
        });
    return next();
});

server.post('/productsPush7', function (req, res, next) {
    var product = req.params;
    dbMongoJs.products.save(product,
        function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'application/json; charset=utf-8'
            });
            res.end(JSON.stringify(data));
        });
    return next();
});


module.exports = server;

