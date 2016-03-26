/**
 * Created by Alex Torres on 3/23/2016.
 */
//Used only for testing porpusea! the real client would be any device.
var restify = require('restify');
var server = require('./server');

//Se genera cliente local.  Esto para efectos de pruebas.
var client = restify.createJsonClient({
    url: 'http://localhost:4000'

});
console.log("Client started at @4000 port ;)");

var testProduct = {
    id: "2",
    name: "Apple iPad AIR",
    os: "iOS 7, upgradable to iOS 7.1",
    chipset: "Apple A7",
    cpu: "Dual-core 1.3 GHz Cyclone (ARM v8-based)",
    gpu: "PowerVR G6430 (quad-core graphics)",
    sensors: "Accelerometer, gyro, compass",
    colors: "Space Gray, Silver"
};

var testProduct2 = {
    id: "3",
    name: "HP Pavilion",
    os: "Windows 7",
    chipset: "Apple A7",
    cpu: "Dual-core 1.3 GHz Cyclone (ARM v8-based)",
    gpu: "PowerVR G6430 (quad-core graphics)",
    sensors: "Accelerometer",
    colors: "Black"
};

var testProduct3 = {
    id: "4",
    name: "HP Beats Edition",
    os: "Windows 8.01",
    chipset: "NVidia",
    cpu: "Dual-core 1.3 GHz Cyclone (ARM v8-based)",
    gpu: "PowerVR G6430 (quad-core graphics)",
    sensors: "NA",
    colors: "Black"
};

var testProduct4 = {
    id: "5",
    name: "Samsung Laptop",
    os: "Windows 10",
    chipset: "AMD",
    cpu: "Dual-core 1.3 GHz Cyclone (ARM v8-based)",
    gpu: "PowerVR G6430 (quad-core graphics)",
    sensors: "NA",
    colors: "White"
};

var testProduct5 = {
    id: "6",
    name: "Sony Vaio",
    os: "Windows xp",
    chipset: "Intel",
    cpu: "Dual-core 1.8 GHz  (ARM v8-based)",
    gpu: "PowerVR G6430 (quad-core graphics)",
    sensors: "NA",
    colors: "White"
};

var testProduct6 = {
    id: "7",
    name: "Mac Book Pro",
    os: "Apple El Capitan",
    chipset: "Intel",
    cpu: "Dual-core 1.8 GHz  (ARM v8-based)",
    gpu: "PowerVR G6430 (quad-core graphics)",
    sensors: "NA",
    colors: "White"
};

var testProduct7 = {
    id: "8",
    name: "Apple iPad new",
    os: "iOS 7, upgradable to iOS 7.1",
    chipset: "Apple A7",
    cpu: "Dual-core 1.3 GHz Cyclone (ARM v8-based)",
    gpu: "PowerVR G6430 (quad-core graphics)",
    sensors: "NA, gyro, compass",
    colors: "Silver"
};



//Testing porpuse only! add new products to Mongo in cloud.
client.post('/productsPush1', testProduct, function(err, req, res, product){
    if(err){
        console.log("Ha ocurrido un error al intentar insertar con client.post")  ;
        //ResourceNotFound / product doest no exists
        console.log(product);
        console.log(err);
    }else{
        console.log('Registro insertado');
        console.log(product);
    }
});

client.post('/productsPush2', testProduct2, function(err, req, res, product){
    if(err){
        console.log("Ha ocurrido un error al intentar insertar con client.post")  ;
        //ResourceNotFound / product doest no exists
        console.log(product);
        console.log(err);
    }else{
        console.log('Registro insertado');
        console.log(product);
    }
});

client.post('/productsPush3', testProduct3, function(err, req, res, product){
    if(err){
        console.log("Ha ocurrido un error al intentar insertar con client.post")  ;
        //ResourceNotFound / product doest no exists
        console.log(product);
        console.log(err);
    }else{
        console.log('Registro insertado');
        console.log(product);
    }
});

client.post('/productsPush4', testProduct4, function(err, req, res, product){
    if(err){
        console.log("Ha ocurrido un error al intentar insertar con client.post")  ;
        //ResourceNotFound / product doest no exists
        console.log(product);
        console.log(err);
    }else{
        console.log('Registro insertado');
        console.log(product);
    }
});

client.post('/productsPush5', testProduct5, function(err, req, res, product){
    if(err){
        console.log("Ha ocurrido un error al intentar insertar con client.post")  ;
        //ResourceNotFound / product doest no exists
        console.log(product);
        console.log(err);
    }else{
        console.log('Registro insertado');
        console.log(product);
    }
});

client.post('/productsPush6', testProduct6, function(err, req, res, product){
    if(err){
        console.log("Ha ocurrido un error al intentar insertar con client.post")  ;
        //ResourceNotFound / product doest no exists
        console.log(product);
        console.log(err);
    }else{
        console.log('Registro insertado');
        console.log(product);
    }
});

client.post('/productsPush7', testProduct7, function(err, req, res, product){
    if(err){
        console.log("Ha ocurrido un error al intentar insertar con client.post")  ;
        //ResourceNotFound / product doest no exists
        console.log(product);
        console.log(err);
    }else{
        console.log('Registro insertado');
        console.log(product);
    }
});