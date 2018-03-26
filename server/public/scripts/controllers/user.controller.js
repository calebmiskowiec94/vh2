myApp.controller('UserController', function ($http, UserService) {
  console.log('UserController created');
  var self = this;
  self.userService = UserService;
  self.userObject = UserService.userObject;
  self.daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  self.meals = ['Breakfast', 'Lunch', 'Dinner']
  self.foodList = { data: [] };
  // object to send to DB
  self.food = {
    type: '',
    meal: '',
    day: ''
  }
  self.getFood = function () {
    return $http.get('/monday/monday')
      .then((res) => {
        self.foodList.data = res.data.rows;
        console.log('logging self.foodList -> ', self.foodList);
      }, (err) => {
        console.log('logging err in getFood -> ', err);
      })
      .catch((reason => {
        console.log('error reason in getFood -> ', reason);
      }));
  }; // end getFood()


  // function to send food items to database
  self.saveFood = function (day, meal) {
    // set food.meal to incoming meal type
    self.food.meal = meal;
    // set food.day to incoming day
    self.food.day = day;
    console.log('food -->', self.food);
    //conditional to which day of week it is
    if (self.food.day === 'Monday') {
      //AJAX(HTTP) post request sending food and meal type to server
      $http.post('/monday/monday', self.food).then(function (response) {
        console.log('successmonday');
      },//end post
      // if error
      function (response) {
          console.log('error');
          self.message = "Please try again."
        });
    } else if (self.food.day === 'Tuesday') {
       //AJAX(HTTP) post request sending food and meal type to server
      $http.post('/tuesday/tuesday', self.food).then(function (response) {
        console.log('successtuesday');
      },//end post
      // if error
        function (response) {
          console.log('error');
          self.message = "Please try again.tuesday"
        });
    } else if (self.food.day === 'Wednesday') {
       //AJAX(HTTP) post request sending food and meal type to server
      $http.post('/wednesday/wednesday', self.food).then(function (response) {
        console.log('successwednesday');
      },//end post
      // if error
        function (response) {
          console.log('error');
          self.message = "Please try again.wednesday"
        });
    } else if (self.food.day === 'Thursday') {
       //AJAX(HTTP) post request sending food and meal type to server
      $http.post('/thursday/thursday', self.food).then(function (response) {
        console.log('successthursday');
      },//end post
      // if error
        function (response) {
          console.log('error');
          self.message = "Please try again.thursday"
        });
    } else if (self.food.day === 'Friday') {
       //AJAX(HTTP) post request sending food and meal type to server
      $http.post('/friday/friday', self.food).then(function (response) {
        console.log('successfrisday');
      },//end post
      // if error
        function (response) {
          console.log('error');
          self.message = "Please try again.friday"
        });
    } else if (self.food.day === 'Saturday') {
       //AJAX(HTTP) post request sending food and meal type to server
      $http.post('/saturday/saturday', self.food).then(function (response) {
        console.log('successSaturday');
      },//end post
      // if error
        function (response) {
          console.log('error');
          self.message = "Please try again.Saturday"
        });
    } else if (self.food.day === 'Sunday') {
       //AJAX(HTTP) post request sending food and meal type to server
      $http.post('/sunday/sunday', self.food).then(function (response) {
        console.log('successsunday');
      },//end post
      // if error
        function (response) {
          console.log('error');
          self.message = "Please try again.sunday"
        });
    } else {
      console.log("end");
    }//end else
  }//end saveFood function


});