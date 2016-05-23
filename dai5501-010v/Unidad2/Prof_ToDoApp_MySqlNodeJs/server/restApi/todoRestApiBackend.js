/**
 * Created by Alex Torres on 5/22/2016.
 */

(function () {

    'use strict';
    //De aquí en más, el enginee de javascript gatillará errores respectivos
    //a una ejecuciuón segura y estricta.

    var express =require('express');
    var path=require('path');
    var logger =require('morgan');
    var cookieParser=require('cookie-parser');
    var bodyParser=require('body-parser');

    var routes=require('./routes/index');

    var app = express();


    //View enginee setup.
    app.set('views', path.join(__dirname, 'views'));
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cookieParser());

    app.use(express.static(path.join(__dirname, '../webApp')));

    app.all('*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header("Access-Control-Allow-Headers", "X-Requested-With,X-Powered-By,Content-Type");
        if (req.method === 'OPTIONS') {
            res.status(200).end();
        } else {
            next();
        }
    });

    app.use('/', routes);
    app.set('port', process.env.PORT || 3000);

    var server = app.listen(app.get('port'), function() {
        console.log('Servidor middleware express sirviendo desde el puerto ' + server.address().port);
    });

    module.exports = app;
}());



