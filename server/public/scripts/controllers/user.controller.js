myApp.controller('UserController', ['$http','UserService', function($http, UserService) {
  console.log('UserController created');
  var self = this;
  self.userService = UserService;
  self.userObject = UserService.userObject;
  // self.mondayObject = UserService.mondayObject
  self.monday = {
    bfood: ''
  };
  self.message = '';

  self.saveMonday = function () {

    console.log('sending to server...', self.monday);
    $http.post('/monday', self.monday).then(function (response) {
      console.log('successmonday');

    },
      function (response) {
        console.log('error');
        self.message = "Something went wrong. Please try again."
      });

  }
}]);
