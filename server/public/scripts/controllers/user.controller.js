myApp.controller('UserController',  function ($http, UserService) {
  console.log('UserController created');
  var self = this;
  self.userService = UserService;
  self.userObject = UserService.userObject;
  // self.mondayObject = UserService.mondayObject
  // self.monday = {
  //   bfood: ''
  // };
 
 self.daysOfWeek = ['monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
self.meals = ['breakfast', 'lunch', 'dinner']
  // object to send format
   self.food = {
     type: '',
     meal: '',
     day: ''
   }

  self.saveFood = function (day, meal) {
    self.food.meal = meal;
    self.food.day = day;
    //  in here make food.meal === to meal (arguemnt)

    console.log('food -->', self.food);
    $http.post('/monday/b', self.food).then(function (response) {
      console.log('successmonday');

    },
      function (response) {
        console.log('error');
        self.message = "Something went wrong with your breakfast. Please try again."
      });

  }

  // self.mondaylunch = {
  //   lfood: ''
  // };
  // self.message = '';

  // self.saveMondayLunch = function () {

  //   console.log('sending to server...', self.mondaylunch);
  //   $http.post('/monday/l', self.mondaylunch).then(function (response) {
  //     console.log('successmondaylunch');

  //   },
  //     function (response) {
  //       console.log('error');
  //       self.message = "Something went wrong with your lunch. Please try again."
  //     });

  // }
  // //object and function for dinner post
  // self.mondaydinner = {
  //   dfood: ''
  // };
  // self.message = '';

  // self.saveMondayDinner = function () {

  //   console.log('sending to server...', self.mondaydinner);
  //   $http.post('/monday/d', self.mondaydinner).then(function (response) {
  //     console.log('successmondaydinner');

  //   },
  //     function (response) {
  //       console.log('error');
  //       self.message = "Something went wrong with your dinner. Please try again."
  //     });

  // }
});