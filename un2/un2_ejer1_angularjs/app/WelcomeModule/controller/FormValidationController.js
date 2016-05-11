/**
 * Created by Alex Torres on 5/2/2016.
 */

//Generar nuestro modulo.
var app = angular.module('LoginFormModule',
[]);


//Controller.
app.controller('LoginFormController', function ($scope, $http){
    // Modelo, entidad generada para sustentar la vista.
    $scope.formModel = {};

    //function que llama al Submit.
    $scope.onSubmit = function(){
     console.log("Llegue, ¡primer submit con AngularJs");
        console.log($scope.formModel);

        //más adelante, haremos llamadas HTTP.


    };




}) ;
