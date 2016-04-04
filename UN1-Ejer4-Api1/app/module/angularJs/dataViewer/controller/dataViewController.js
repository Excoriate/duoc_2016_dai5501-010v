

/**
 * Created by Alex Torres on 3/30/2016.
 */


var daiModule = angular.module('consumeApiApp', []);

//CORS
daiModule.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}
]);

//Controller.
daiModule.controller('consumeController', function ($scope, ProductsFactory) {

    $scope.onSubmit = function () {

        $scope.ProductsInfo = {};

        ProductsFactory.ConsumeRestApiNodeJs().
        then(function(data){
            $scope.ProductsInfo= data;
        });

    };

});

daiModule.factory('ProductsFactory', [ '$http', function($http){

    var ProductsFactory= {};

    ProductsFactory.ConsumeRestApiNodeJs = function(){
        return $http.get('http://ec2-52-38-91-238.us-west-2.compute.amazonaws.com:81/products').
        then(function(res){
            return res.data;
        },function(error){
            console.log(error);
            return [];
        });
    }

    return ProductsFactory;
}]);