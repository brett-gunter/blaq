// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'backand'])

.config(function (BackandProvider) {
  BackandProvider.setAppName('blaq');
  BackandProvider.setAnonymousToken('d5e43338-fc1a-4391-83c3-31d37642e604');
})




.controller('AppCtrl', function($scope, TodoService) {
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









.service('TodoService', function ($http, Backand) {
  var baseUrl = '/1/objects/';
  var objectName = 'todos/';

  function getUrl() {
    return Backand.getApiUrl() + baseUrl + objectName;
  }

  function getUrlForId(id) {
    return getUrl() + id;
  }

  getTodos = function () {
    return $http.get(getUrl());
  };

  addTodo = function(todo) {
    return $http.post(getUrl(), todo);
  }

  deleteTodo = function (id) {
    return $http.delete(getUrlForId(id));
  };

  return {
    getTodos: getTodos,
    addTodo: addTodo,
    deleteTodo: deleteTodo
  }
});
