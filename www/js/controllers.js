angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, TodoService) {
  $scope.todos = [];
  $scope.input = {};

  function getAllTodos() {
    TodoService.getTodos()
      .then(function (result) {
        $scope.todos = result.data.data;
      });
  }

  $scope.addTodo = function() {
    TodoService.addTodo($scope.input)
      .then(function(result) {
        $scope.input = {};
        // Reload our todos, not super cool
        getAllTodos();
      });
  }

  $scope.deleteTodo = function(id) {
    TodoService.deleteTodo(id)
      .then(function (result) {
        // Reload our todos, not super cool
        getAllTodos();
      });
  }

  getAllTodos();
})

.controller('SocialCtrl', function($scope) {})

.controller('leaderboardCtrl', function($scope, UsersService) {
  $scope.users = [];
  $scope.input = {};

  function getAllUsers() {
    UsersService.getUsers()
      .then(function (result) {
        $scope.users = result.data.data;
      });
  }

  getAllUsers();

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})



.controller('AppCtrl', function($scope, TodoService) {


  getAllTodos();
});
