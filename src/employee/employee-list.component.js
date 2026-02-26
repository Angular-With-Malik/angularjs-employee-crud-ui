(function () {
    angular
        .module('employee')
        .component('employeeList', {
            templateUrl: 'employee/employee-list.component.html',
            controller: function () {
                const vm = this
                vm.allEmployee = [
                    {
                        id: 1, firstName: 'Ram', lastName: 'Varma', city: 'Pune', designation: 'Manager',
                        salary: '50000'
                    },
                    {
                        id: 1, firstName: 'Rajesh', lastName: 'Sharma', city: 'Mumbai',
                        designation: 'Jr. Developer', salary: '20000'
                    },
                    {
                        id: 1, firstName: 'Kishor', lastName: 'Patil', city: 'Pune',
                        designation: 'Sr. Developer', salary: '25000'
                    },
                    {
                        id: 1, firstName: 'Geeta', lastName: 'Dev', city: 'Mumbai',
                        designation: 'Manager', salary: '30000'
                    }
                ]
            }
        })
})()