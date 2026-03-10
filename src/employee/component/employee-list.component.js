(function () {
    angular
        .module('employee')
        .component('employeeList', {
            templateUrl: 'src/employee/component/employee-list.component.html',
            controller: function (employeeService) {
                const vm = this

                vm.employeeService = employeeService;

                vm.$onInit = function () {
                    console.log('Employee List Component');
                    employeeService._getAllEmployee()
                }

                vm.deleteEmployeeById = function (employeeId) {
                    console.log('In Delete Employee', employeeId);
                    employeeService._deleteEmployee(employeeId)
                        .then(function (response) {
                            console.log(response);
                            if (response.status === 200) {
                                employeeService._getAllEmployee()
                            } else {
                                console.error('Employee Not Found');
                            }
                        })
                        .catch(function (error) {
                            console.error('Error while deleting employee', error)
                        })
                }

                vm.editEmployee = function (employee) {
                    console.log('Employee to Edit ', employee);
                    employeeService.setCurrentEmployee(employee)
                }
            }
        })
})()
