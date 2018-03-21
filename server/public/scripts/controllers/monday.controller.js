myApp.controller('MondayController', function ($http, $location, MondayService) {
    console.log('MondayController created');
    var vm = this;
    vm.monday = {
        bfooditem: '',//do i need to do vm.mondaybreakfast and only submit bfooditem? and then redo for lunch/dinner etc. so it will be a new function for submitting monday breakfast, a new one for monday lunch etc... so three function per day of the week.... seems like a lot...
        lfooditem: '',
        dfooditem: '',
        date: ''
    };
    vm.mondaySend = function () {
        console.log('set up monday');

        console.log('MondayController --  -- sending info to server...', vm.monday);
        $http.post('/', vm.monday).then(function (response) {
            $location.path('/home');
        });
    };
});
console.log(vm.monday);

