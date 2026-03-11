(function () {
    angular
        .module('employee')
        .service('employeeService', function ($http) {

            const vm = this
            const BASE_URL = 'http://localhost:3001/employee'

            vm.allEmployee = []

            vm.currentEmployee = {
                id: 0,
                firstName: '',
                lastName: '',
                city: '',
                designation: '',
                salary: '',
                department: '',
                gender: ''
            }

            vm.setCurrentEmployee = function (employee) {
                console.log('Employee service setCurrentEmployee', employee);
                vm.currentEmployee = Object.assign({}, employee) // angular.copy(employee)  // ...  // Object.assign({}, employee)
            }

            vm.getCurrentEmployee = function () {
                console.log('Employee service getCurrectEmployee', vm.currentEmployee);
                return vm.currentEmployee;
            }

            vm._getAllEmployee = function () {
                return $http.get(BASE_URL)
                    .then(function (response) {
                        console.log(response);
                        vm.allEmployee = response.data
                        return vm.allEmployee
                    })
                    .catch(function (error) {
                        console.error('Error while get all employee', error)
                    })
            }

            vm._deleteEmployee = function (id) {
                return $http.delete(BASE_URL + '/' + id)
            }

            vm._createEmployee = function (employee) {
                return $http.post(BASE_URL, employee)
            }

            vm.updateEmployee = function (employee) {
                return $http.put(BASE_URL + '/' + employee.id, employee)
            }
        })
})();
