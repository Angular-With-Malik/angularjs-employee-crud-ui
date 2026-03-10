(function () {
    angular
        .module('shared')
        .component('appHeader', {   //app-header
            templateUrl: 'src/shared/template/header.component.html',
            controller: function () {
                const vm = this
                vm.title = 'Employee CRUD Application'
            }
        })
})();
