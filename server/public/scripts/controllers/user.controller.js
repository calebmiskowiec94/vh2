myApp.controller('UserController',  function ($http, UserService) {
  console.log('UserController created');
  var self = this;
  self.userService = UserService;
  self.userObject = UserService.userObject;
  // self.mondayObject = UserService.mondayObject
  // self.monday = {
  //   bfood: ''
  // };
 
 self.daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
self.meals = ['Breakfast', 'Lunch', 'Dinner']
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

    if (self.food.day === 'Monday') {
      $http.post('/monday/monday', self.food).then(function (response) {
        console.log('successmonday');

      },

        function (response) {
          console.log('error');
          self.message = "Please try again."
        });
    } else if (self.food.day === 'Tuesday'){
      $http.post('/tuesday/tuesday', self.food).then(function (response) {
        console.log('successtuesday');

      },

        function (response) {
          console.log('error');
          self.message = "Please try again.tuesday"
        }); 
    } else if (self.food.day === 'Wednesday') {
      $http.post('/wednesday/wednesday', self.food).then(function (response) {
        console.log('successwednesday');

      },

        function (response) {
          console.log('error');
          self.message = "Please try again.wednesday"
        }); 
    } else if (self.food.day === 'Thursday') {
      $http.post('/thursday/thursday', self.food).then(function (response) {
        console.log('successthursday');

      },

        function (response) {
          console.log('error');
          self.message = "Please try again.thursday"
        }); 
    } else if (self.food.day === 'Friday') {
      $http.post('/friday/friday', self.food).then(function (response) {
        console.log('successfrisday');

      },

        function (response) {
          console.log('error');
          self.message = "Please try again.friday"
        }); 
    } else if (self.food.day === 'Saturday') {
      $http.post('/saturday/saturday', self.food).then(function (response) {
        console.log('successSaturday');

      },

        function (response) {
          console.log('error');
          self.message = "Please try again.Saturday"
        }); 
    } else if (self.food.day === 'Sunday') {
      $http.post('/sunday/sunday', self.food).then(function (response) {
        console.log('successsunday');

      },

        function (response) {
          console.log('error');
          self.message = "Please try again.sunday"
        }); 
    } else {
      console.log("end");
    }

    



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