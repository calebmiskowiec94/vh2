myApp.controller('UserController', ['$http', 'UserService', function ($http, UserService) {
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
    $http.post('/monday/b', self.monday).then(function (response) {
      console.log('successmonday');

    },
      function (response) {
        console.log('error');
        self.message = "Something went wrong with your breakfast. Please try again."
      });

  }

  self.mondaylunch = {
    lfood: ''
  };
  self.message = '';

  self.saveMondayLunch = function () {

    console.log('sending to server...', self.mondaylunch);
    $http.post('/monday/l', self.mondaylunch).then(function (response) {
      console.log('successmondaylunch');

    },
      function (response) {
        console.log('error');
        self.message = "Something went wrong with your lunch. Please try again."
      });

  }
  //object and function for dinner post
  self.mondaydinner = {
    dfood: ''
  };
  self.message = '';

  self.saveMondayDinner = function () {

    console.log('sending to server...', self.mondaydinner);
    $http.post('/monday/d', self.mondaydinner).then(function (response) {
      console.log('successmondaydinner');

    },
      function (response) {
        console.log('error');
        self.message = "Something went wrong with your dinner. Please try again."
      });

  }
}]);