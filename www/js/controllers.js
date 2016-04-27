angular.module('app.controllers', [])

.controller('produtosCtrl', function($scope, ProdutosFactory) {
  ProdutosFactory.get().then(function(response) {
    $scope.list = response.data.resultados;
  });


})

.controller('carrinhoCtrl', function($scope) {

})

.controller('listagemCtrl', function($scope) {

})

.controller('loginCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('pedidoCtrl', function($scope) {

})

.controller('cuponsDeDescontoCtrl', function($scope) {

})

.controller('chatCtrl', function($scope) {

})

.controller('contatosCtrl', function($scope) {

})
.controller('viewProdutoCtrl', function($scope, $ionicHistory) {
  $scope.ionicGoBack = function() {
   $ionicHistory.goBack();
 };
 $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
   viewData.enableBack = true;
 });
})
