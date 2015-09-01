(function() {
    angular.module("app")
        .directive("baGenerator",Directive);
        
        Directive.$inject = [];
        
        function Directive(element,link) {
            var directive = {
                controller:Controller,
                controllerAs:"vm",
                templateUrl:"components/generator.html",
                scope: {
                    generator:"="
                },
                bindToController:true
            };
            
            return directive;
        
        }
        
        Controller.$inject = [];
        
        function Controller() {
            var vm = this;
            
        }
})();