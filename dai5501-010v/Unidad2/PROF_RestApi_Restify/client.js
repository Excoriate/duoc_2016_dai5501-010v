/**
 * Created by Alex Torres on 5/25/2016.
 */

var restify = require('restify');
var server = require('./server');

var client = restify.createJSONClient({
    url: 'http://localhost:3000'
}) ;

var myProduct = {
    id: "4",
    name: "recien insertado",
    descripcion: "sobre mongodb",
    por: "profesor",
    valor: "91231",
    estado: "enviado"
};

client.post('/products', myProduct, function (err, req, res, products) {
    if(err)
    {
        console.log("ha ocurrido un error al intentar insertar en mlab");
        console.log(err);
    }else
    {
        console.log("Producto insertado satisfactoriamente en mlab.");
        console.log(myProduct);
    }
    
}) ;

























