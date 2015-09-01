(function() {
    angular.module("app")
        .directive("baResources",Directive);
        
        Directive.$inject = [];
        
        function Directive(element,link) {
            var directive = {
                controller:Controller,
                controllerAs:"vm",
                templateUrl:"components/resources.html",
                scope: {
                    resources:"="
                },
                bindToController:true
            }
            
            return directive;
        
        }
        
        Controller.$inject = [];
        
        function Controller() {
            var vm = this;
        }
})();