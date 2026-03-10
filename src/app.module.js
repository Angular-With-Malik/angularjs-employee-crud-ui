(function () {
    angular.module('app', [
        'shared',
        'toastr',
        'employee',
        'ngAnimate',
        'ngMaterial',
        'ngAria'
    ]).config(function (toastrConfig) {
        toastrConfig.positionClass = 'toast-bottom-right',
        toastrConfig.timeOut = 5000000  
    })
})();
