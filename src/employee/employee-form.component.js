(function () {
    angular
        .module('employee')
        .component('employeeForm', {
            templateUrl: 'employee/employee-form.component.html',
            controller: function () {
                const vm = this
                vm.message = 'Employee Form'
            }
        })
})();
