angular.module('starter.controllers', [])

.controller('ProfileCtrl', function($scope, TodoService) {
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

.controller('RewardsCtrl', function($scope, RewardsService, UsersService) {
  $scope.rewards = [];
  $scope.users = []
  $scope.input = {};

  function getAllRewards() {
    RewardsService.getRewards()
      .then(function (result) {
        $scope.rewards = result.data.data;
      });
  }
  function getAllUsers() {
    UsersService.getUsers()
      .then(function (result) {
        $scope.users = result.data.data;
      });
  }

  getAllUsers();
  getAllRewards();
})

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

.controller('Blaq_listCtrl', function($scope, BLAQService) {
  $scope.blaq = [];
  $scope.input = {};

  function getAllBLAQ() {
    BLAQService.getBLAQ()
      .then(function (result) {
        $scope.blaq = result.data.data;
      });
  }




  getAllBLAQ();
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('SocialCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})



.controller('AppCtrl', function($scope, TodoService) {


  getAllTodos();
});
