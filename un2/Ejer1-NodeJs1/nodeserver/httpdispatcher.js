//Definimos el HTTP Listener.
var http = require("http"),
    port = 1234;

//Se genera el servidor, el cual es una función javscript anónima que recibe dos argumentos, request y
//response
var server = http.createServer(function(request,response){
    //Se genera el http Response.
    response.writeHeader(200, {"Content-Type": "text/plain"});
    response.write("Primera respuesta desde servidor en NodeJs");
    response.end();
});

//Indicamos, sobre qué puerto escuchamos.
server.listen(port);

console.log("Server Running on "+port+".\nLaunch http://localhost:"+port);
