angular.module('app.services', [])

.factory('ProdutosFactory', ['$http',function($http){
  var URLAPP = 'http://develop.entregapp.com.br/';
  var empresa='9';
  var filialPadrao="13";
  minhaUrl=URLAPP+"RestProdutos/prodsmobile.json?se="+empresa+"&sf=&fp="+filialPadrao+"";
  return {
     get:  function(){
       return $http.get(minhaUrl)
        .success(function(data) {
          return data;
        }); // this will return a promise to controller
     }
   }
}])

.service('ProdutosService', ['$http', function($http){

}]);
