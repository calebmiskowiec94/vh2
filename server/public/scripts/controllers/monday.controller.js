// myApp.controller('MondayController', ['$http', '$location', 'UserService', function ($http, $location, UserService) {
//     console.log('MondayController created');
//     var self = this;
//     self.monday = {
//         bfood: ''
//     };
//     self.message = '';

//     self.saveMonday = function () {
         
//             console.log('sending to server...', self.monday);
//             $http.post('/monday', self.monday).then(function (response) {
//                 console.log('successmonday');
                
//             },
//                 function (response) {
//                     console.log('error');
//                     self.message = "Something went wrong. Please try again."
//                 });
        
//     }
// }]);


