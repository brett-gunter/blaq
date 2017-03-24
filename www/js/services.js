angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Paddle Board Utah Lake',
    lastText: 'Points: 25',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Long Board Provo Canyon',
    lastText: 'Points: 25',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Tag at Discovery Park',
    lastText: 'Points: 25',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Throw Paper Airplanes off WellsFargo Building',
    lastText: 'Points: 25',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Eat Graham Canyon Ice Cream',
    lastText: 'Points: 25',
    face: 'img/mike.png'
  }]

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
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
  })


  .service('UsersService', function ($http, Backand) {
    var baseUrl = '/1/objects/';
    var objectName = 'users/';

    function getUrl() {
      return Backand.getApiUrl() + baseUrl + objectName;
    }

    function getUrlForId(id) {
      return getUrl() + id;
    }

    getUsers = function () {
      return $http.get(getUrl());
    };



    return {
      getUsers: getUsers
    }
  })
