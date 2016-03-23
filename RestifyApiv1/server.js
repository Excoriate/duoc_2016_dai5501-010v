/**
 * Created by Alex Torres on 3/21/2016.
 */

var restify = require ('restify');
var  mongojs = require('mongojs');

//Mongo base de datos NoSql. BD: mongoclouddb y la coleccion es products
var db = mongojs('mongodb://mongo:mongomaster@ds051873.mlab.com:51873/mongosecluddb', ['products']);

var server = restify.createServer();

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser()) ;

server.listen(3000, function(){
    console.log("Server iniciado :D en puerto @3000");
}) ;


//Endpoint GET.
///*server.get("/products", function (rep, res, next){
//
//    res.send("Probando endpoint api Rest con NodeJs.");
//    return next();
//
//});*/

server.get("/productsTest", function (rep, res, next){

    req.writeHead(200,{
        'Content Type:' : 'application/json charset=utf-8'

    }) ;

    res.send("You will see all the products in the colection with this end point");
    return next();

});

//Products, desde mongoCloud
server.get("/products", function (req, res, next) {
    db.products.find(function (err, products) {
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });
        res.end(JSON.stringify(products));
    });
    return next();
});

//Insertando nuevoi producto.
server.post('/products', function(req, res, next){
    var newProduct = req.params;

    db.products.save(newProduct, function (err, data){
        res.writeHead(200, {
            'Content-Type':'application/json; charset=utf-8'
        });
        res.end(JSON.stringify(data));
    }) ;

}) ;

//Permitir acceder al servidor desde otros archivos.
module.exports = server;

//update

server.put('/product/:id', function (req, res, next) {
    // get the existing product
    db.products.findOne({
        id: req.params.id
    }, function (err, data) {
        // merge req.params/product with the server/product

        var updProd = {}; // updated products
        // logic similar to jQuery.extend(); to merge 2 objects.
        for (var n in data) {
            updProd[n] = data[n];
        }
        for (var n in req.params) {
            updProd[n] = req.params[n];
        }
        db.products.update({
            id: req.params.id
        }, updProd, {
            multi: false
        }, function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'application/json; charset=utf-8'
            });
            res.end(JSON.stringify(data));
        });
    });
    return next();
});

server.del('/product/:id', function (req, res, next) {
    db.products.remove({
        id: req.params.id
    }, function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });
        res.end(JSON.stringify(true));
    });
    return next();
});

//Get One
server.get('/product/:id', function (req, res, next) {
    db.products.findOne({
        id: req.params.id
    }, function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });
        res.end(JSON.stringify(data));
    });
    return next();
});




