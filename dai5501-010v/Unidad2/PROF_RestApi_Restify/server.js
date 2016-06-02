/**
 * Created by Alex Torres on 5/25/2016.
 */

var restify = require('restify');
var mongojs = require('mongojs');

// var db = mongojs('mongodb://dai5501:dai5501@ds011883.mlab.com:11883/products_db_dai', ['products']);
var db = mongojs('mongodb://mongo:mongomaster@ds051873.mlab.com:51873/mongosecluddb', ['products']);

var server = restify.createServer();
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.listen(3000,  function () {
    console.log("Servidor iniciado en el puerto 3000. ");
});

//
// server.get("/products", function (req, res, next) {
//     res.send("Primera petición, get sobre nuestro servidor. ");
//
//     return next();
// });

server.get("/products", function (req, res, next) {

    db.products.find(function (err, products) {
        res.writeHead(200, {
            'Content Type:' : 'application/json charset=utf-8'
        });

        res.end(JSON.stringify(products));
    });

    return next();
});

server.post('/products', function (req, res, next) {
    var product = req.params;
    db.products.save(product, function (err, data) {

        res.writeHead(200, {
            'Content Type:' : 'application/json charset=utf-8'
        });

        res.end(JSON.stringify(products));
        
    })

})

module.exports = server;














