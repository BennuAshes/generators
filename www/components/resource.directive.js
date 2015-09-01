(function() {
    angular.module("app")
        .directive("baResource",Directive);
        
        Directive.$inject = [];
        
        function Directive(element,link,controller,vm) {
            var directive = {
                controller:Controller,
                controllerAs:"vm",
                templateUrl:"components/resource.html",
                scope: {
                    resource:"="
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