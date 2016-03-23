var restify = require('restify');
var server = require('./server');

//Se genera cliente local.  Esto para efectos de pruebas.
var client = restify.createJsonClient({
    url: 'http://localhost:3000'
});

//Producto de prueba.
var testProduct = {
    id: "1",
    name: "Apple iPad AIR",
    os: "iOS 7, upgradable to iOS 7.1",
    chipset: "Apple A7",
    cpu: "Dual-core 1.3 GHz Cyclone (ARM v8-based)",
    gpu: "PowerVR G6430 (quad-core graphics)",
    sensors: "Accelerometer, gyro, compass",
    colors: "Space Gray, Silver"
};

testProduct.price = "1000 USD",
    //Actualizando producto.
    client.put('/product/' + testProduct.id, testProduct, function (err, req, res, status) {
        if (err) {
            console.log("An error ocurred >>>>>>");
            console.log(err);
        } else {
            console.log('Product saved >>>>>>>');
            console.log(status);
        }

    });



//Enviando un post desde el cliente con el producto de prueba.
client.post('/products', testProduct, function(err, req, res, product){
    if(err){
        console.log("Ha ocurrido un error al intentar insertar con client.post")  ;
        //ResourceNotFound / product doest no exists
        console.log(product);
        console.log(err);
    }else{
        console.log('Registro insertado');
        console.log(product);
    }
}) ;

client.get('/products', function (err, req, res, products) {
    if (err) {
        console.log("An error ocurred >>>>>>");
        console.log(err);
    } else {
        console.log("Total products " + products.length);
        console.log('All products >>>>>>>');
        console.log(products);
    }
});

client.del('/product/' + testProduct.id, function (err, req, res, status) {
    if (err) {
        console.log("An error ocurred >>>>>>");
        console.log(err);
    } else {
        console.log('Product deleted >>>>>>>');
        console.log(status);
    }
});

client.get('/product/' + testProduct.id, function (err, req, res, product) {
    if (err) {
        console.log("An error ocurred >>>>>>");
        console.log(err);
    } else {
        console.log('Product with id ' + product.id + '  >>>>>>>');
        console.log(product);
    }
});