(function () {
    angular
        .module('employee')
        .component('employeeForm', {
            templateUrl: 'src/employee/component/employee-form.component.html',
            controller: function (employeeService, $mdToast) {
                const vm = this
                vm.message = 'Employee Form'
                vm.allDepartment = [
                    { label: 'Sales', value: 'sales' },
                    { label: 'Finance', value: 'finance' },
                    { label: 'HR', value: 'hr' }
                ]

                vm.$onInit = function () {
                    console.log('Employee Form On Init ');
                }

                vm.$doCheck = function () {
                    console.log('Employee Form Do Check ');
                    vm.currentEmployee = employeeService.getCurrentEmployee()
                }

                vm.save = function () {
                    console.log(vm.currentEmployee);
                    if (vm.currentEmployee.id === 0) {
                        createEmployee()
                    } else {
                        updateEmployee()
                    }
                }

                async function createEmployee() {
                    console.log('Save Employee', vm.currentEmployee);
                    let maxId = await getMaxEmployeeId();
                    console.log('Max Id in Save Employee : ', maxId);
                    vm.currentEmployee.id = String(maxId + 1)
                    employeeService._createEmployee(vm.currentEmployee)
                        .then(function (response) {
                            if (response.status === 201) {
                                employeeService._getAllEmployee()
                                vm.clear()
                                employeeService.showNotification($mdToast, 'Employee Created Successfully !')
                            }
                        }).catch(function (error) {
                            console.error('Error while creating employee', error)
                        })
                }

                function getMaxEmployeeId() {
                    return new Promise(async function (resolve) {
                        let allEmployee = {}
                        allEmployee = await employeeService._getAllEmployee()
                            .then(function (result) {
                                return result;
                            })
                        console.log(allEmployee);

                        let maxId = 0;
                        if (allEmployee.length > 0) {
                            let allId = allEmployee.map(function (employee) {
                                return employee.id
                            })
                            console.log(allId);

                            maxId = Math.max(...allId)
                            console.log(maxId);
                        }
                        resolve(maxId)
                    })
                }

                vm.clear = function () {
                    employeeService.currentEmployee = {
                        id: 0,
                        firstName: '',
                        lastName: '',
                        city: '',
                        designation: '',
                        salary: '',
                        department: '',
                        gender: ''
                    }
                }

                function updateEmployee() {
                    employeeService.updateEmployee(vm.currentEmployee)
                        .then(function (response) {
                            if (response.status === 200) {
                                employeeService._getAllEmployee()
                                vm.clear()
                            }
                        }).catch(function (error) {
                            console.error('Error while updating employee', error)
                        })
                }
            }
        })
})();
