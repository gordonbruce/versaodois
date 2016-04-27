angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('tabsController.produtos', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/produtos.html',
        controller: 'produtosCtrl'
      }
    }
  })

  .state('tabsController.carrinho', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/carrinho.html',
        controller: 'carrinhoCtrl'
      }
    }
  })

  .state('tabsController.listagem', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/listagem.html',
        controller: 'listagemCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('pedido', {
    url: '/page7',
    templateUrl: 'templates/pedido.html',
    controller: 'pedidoCtrl'
  })

  .state('cuponsDeDesconto', {
    url: '/page8',
    templateUrl: 'templates/cuponsDeDesconto.html',
    controller: 'cuponsDeDescontoCtrl'
  })

  .state('chat', {
    url: '/page9',
    templateUrl: 'templates/chat.html',
    controller: 'chatCtrl'
  })

  .state('contatos', {
    url: '/page11',
    templateUrl: 'templates/contatos.html',
    controller: 'contatosCtrl'
  })
  .state('viewproduto', {
    url: '/page12',
    templateUrl: 'templates/viewproduto.html',
    controller: 'viewProdutoCtrl'
  })
$urlRouterProvider.otherwise('/page1/page2')



});
