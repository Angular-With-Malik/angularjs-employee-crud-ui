(function () {
    angular
        .module('shared')
        .component('appFooter', {
            templateUrl: 'shared/template/footer.component.html',
            controller: function () {
                const vm = this
                vm.copyRight = 'All Rights Are Received @2026'
            }
        })
})();
